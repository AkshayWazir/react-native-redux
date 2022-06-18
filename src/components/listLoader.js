import React, {useRef, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';

const ListLoader = props => {
  const {data, Item, columnNumber = 1, styles = {}} = props;
  const defStyles = StyleSheet.create({
    container: {
      backgroundColor: '#ff00ff',
      flexGrow: 0,
    },
  });
  const finalStyles = StyleSheet.compose(defStyles.container, styles);
  const listRef = useRef(null);

  const renderItem = ({item}) => <Item {...item} />;

  return (
    <FlatList
      style={finalStyles}
      data={data}
      numColumns={columnNumber}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ref={listRef}
    />
  );
};

export default ListLoader;
