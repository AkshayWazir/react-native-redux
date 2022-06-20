import {createSlice} from '@reduxjs/toolkit';

// {
//   id: 0,
//   title: "Some title",
//   subTitle: "Sub title",
//   details: "some Details",
//   quantity: 0
// }

const productSlicer = createSlice({
  name: 'products',
  initialState: {
    products: [], // this is an Item in the shop
  },
  reducers: {
    addItem: (state, action) => {
      let flag = 0;

      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload.id) {
          state.products[i].quantity += 1;
          flag = 1;
        }
      }
      if (flag === 0) {
        state.products.push({...action.payload.item, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      console.log('Called negative');
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload) {
          state.products[i].quanity =
            state.products[i].quanity > 0 ? state.products[i].quanity - 1 : 0;
        }
      }
    },
  },
});

export const {addItem, removeItem} = productSlicer.actions;
export default productSlicer.reducer;
