import {createSlice} from '@reduxjs/toolkit';

const productSlicer = createSlice({
  name: 'products',
  initialState: {
    // this is Shop
    products: [], // this is an Item in the shop
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const {addItem} = productSlicer.actions;
export default productSlicer.reducer;
