import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Screen2 = props => {
  console.log(props);
  const {route, navigation} = props;

  const styles = StyleSheet.create({
    text: {
      color: '#000',
    },
  });
  return (
    <View>
      <Text style={styles.text}>Screen 2</Text>
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
      />
    </View>
  );
};

export default Screen2;
