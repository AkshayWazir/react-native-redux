export {default as Store} from './store';

import {addItem} from './productReducer';
export const productActions = {
  addProduct: (dispatch, item) => dispatch(addItem(item)),
};
