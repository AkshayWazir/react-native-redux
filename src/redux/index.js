export {default as Store} from './store';

import {addItem} from './productReducer';

export const productActions = {
  addProduct: (dispatch, productId) => dispatch(addItem(productId)),
};
