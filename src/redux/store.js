import {configureStore} from '@reduxjs/toolkit';
import Product from './productReducer';

export default configureStore({
  reducer: {
    product: Product,
  },
});
