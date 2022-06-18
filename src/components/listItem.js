import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
} from 'react-native';
import {productActions} from '../redux';
import {useDispatch} from 'react-redux';

const ListItem = props => {
  const {id, title, type, quantity = 0} = props;
  const {height} = useWindowDimensions();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      height: height * 0.1,
      width: '80%',
      marginHorizontal: '10%',
      marginVertical: height * 0.2,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 0,
      paddingBottom: 0,
    },
    title: {
      flex: 1,
      width: 200,
      height: 100,
      alignSelf: 'flex-start',
      marginLeft: 20,
      marginTop: 20,
    },
    bottomComp: {
      flex: 1,
      width: 200,
      height: 50,
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
            onPress={() => productActions.addProduct(dispatch, id)}
          />
        );
      default:
        return (
          <Text style={styles.bottomComp}>{`Quantity : ${quantity}`}</Text>
        );
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      {optionLoader()}
    </View>
  );
};

export default ListItem;
