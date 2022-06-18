import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {ListItem, ListLoader} from '../components';

const Fragment2 = props => {
  const {height, width} = useWindowDimensions();
  const selectedItems = useSelector(state => state.product).products;
  const styles = StyleSheet.create({
    listContainer: {
      height: height * 0.8,
    },
    bottomInfo: {
      width: width,
      height: height * 0.05,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#000',
    },
  });

  return (
    <View>
      <ListLoader
        Item={ListItem}
        data={selectedItems}
        extItemProps={1}
        styles={styles.listContainer}
      />
      <View style={styles.bottomInfo}>
        <Text style={styles.text}>{`Total Quantity ${selectedItems.reduce(
          (a, b) => a + b.quantity,
          0,
        )}`}</Text>
      </View>
    </View>
  );
};

export default Fragment2;
