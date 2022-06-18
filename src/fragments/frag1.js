import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, ListLoader} from '../components';

const data = [
  {
    id: 0,
    title: 'Shoes',
    subTitle: 'Footwear',
    details: 'Wear this on your feet or something like that',
    quantity: 0,
  },
  {
    id: 1,
    title: 'T-Shirts',
    subTitle: 'Cloths',
    details: 'Wear this on your feet or something like that',
    quantity: 0,
  },
  {
    id: 2,
    title: 'Pants',
    subTitle: 'Cloths',
    details: 'Wear this on your feet or something like that',
    quantity: 0,
  },
  {
    id: 3,
    title: 'Caps',
    subTitle: 'Something',
    details: 'Wear this on your feet or something like that',
    quantity: 0,
  },
];

const Fragment1 = props => {
  const styles = StyleSheet.create({
    mainContainer: {},
  });
  return (
    <View style={styles.mainContainer}>
      <ListLoader
        Item={ListItem}
        data={data}
        columnNumber={2}
        extItemProps={{type: 0}}
      />
    </View>
  );
};

export default Fragment1;
