import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
  Pressable,
} from 'react-native';
import {productActions} from '../redux';
import {useDispatch} from 'react-redux';

const ListItem = props => {
  const {id, title, type, quantity = 0, details, subTitle, navigate} = props;
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      height: height * 0.1,
      width: '80%',
      marginHorizontal: width * 0.01,
      marginVertical: height * 0.01,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 0,
      paddingBottom: 0,
      backgroundColor: '#ffffff',
    },
    title: {
      flex: 1,
      alignSelf: 'flex-start',
      marginLeft: 20,
      marginTop: 20,
      color: '#000',
    },
    bottomComp: {
      flex: 1,
      color: '#000',
      marginRight: '5%',
      alignSelf: 'flex-end',
    },
  });
  const dispatch = useDispatch();

  function optionLoader() {
    switch (type) {
      case 0:
        return (
          <Button
            style={styles.bottomComp}
            title="Add"
            onPress={() =>
              productActions.addProduct(dispatch, {
                item: {
                  id: id,
                  title: title,
                  quantity: quantity,
                  subTitle: subTitle,
                  details: details,
                },
                id: id,
              })
            }
          />
        );
      default:
        return (
          <Text style={styles.bottomComp}>{`Quantity : ${quantity}`}</Text>
        );
    }
  }

  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() => {
        if (type !== 0) {
          console.log('Reached');
          navigate({
            id: id,
            title: title,
            quantity: quantity,
            subTitle: subTitle,
            details: details,
          });
        }
      }}>
      <Text style={styles.title}>{title}</Text>
      {optionLoader()}
    </Pressable>
  );
};

export default ListItem;
