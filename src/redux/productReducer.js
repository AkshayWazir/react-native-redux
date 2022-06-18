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
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload) {
          state.products[i].quanity += 1;
        }
      }
    },
    removeItem: (state, action) => {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload) {
          state.products[i].quanity =
            state.products[i].quanity > 0 ? state.products[i].quanity - 1 : 0;
        }
      }
    },
  },
});

export const {addItem} = productSlicer.actions;
export default productSlicer.reducer;
