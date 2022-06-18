import React, {useRef, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';

const ListLoader = props => {
  const {data, Item, columnNumber = 1, styles = {}, extItemProps = {}} = props;
  const defStyles = StyleSheet.create({
    container: {
      flexGrow: 0,
    },
  });
  const finalStyles = StyleSheet.compose(defStyles.container, styles);
  const listRef = useRef(null);

  const renderItem = ({item}) => <Item {...item} {...extItemProps} />;

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
