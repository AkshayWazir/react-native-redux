export {default as Store} from './store';

import {addItem, removeItem} from './productReducer';

export const productActions = {
  addProduct: (dispatch, product) => dispatch(addItem(product)),
  removeProcut: (dispatch, product) => dispatch(removeItem(product)),
};
