import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {productActions} from '../redux';
import {useDispatch, useSelector} from 'react-redux';

const Screen2 = props => {
  const {route, navigation} = props;
  const data = useSelector(state => state.product).products;

  const res = data.find(item => item.id === route.params.id);
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    text: {
      color: '#000',
    },
  });

  return (
    <View>
      {/* <Text style={styles.text}>Screen 2</Text>
      <Text style={styles.text}>{JSON.stringify(route.params)}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Pass Params Back"
        onPress={() =>
          navigation.navigate({
            name: 'Screen1',
            params: {response: 'Response'},
            merge: true,
          })
        }
      /> */}
      <Text style={styles.text}>{res.title}</Text>
      <Text style={styles.text}>{res.subTitle}</Text>
      <Text style={styles.text}>{res.quantity}</Text>
      <Button
        title="-"
        onPress={() => productActions.removeProcut(dispatch, data)}
      />
    </View>
  );
};

export default Screen2;
