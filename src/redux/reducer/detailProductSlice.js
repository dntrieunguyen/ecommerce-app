import { createSlice } from '@reduxjs/toolkit';

export const detailProductSlice = createSlice({
   name: 'detailProduct',
   initialState: {
      // handle here!
      productID: '',
      img: '',
   },
   reducers: {
      // handle here!
      updateProductID: (state, action) => {
         state.productID = action.payload.productID;
         state.img = action.payload.img;
      },
   },
});
