import { createSlice } from '@reduxjs/toolkit';

export const detailProductSlice = createSlice({
   name: 'detailProduct',
   initialState: {
      // handle here!
      productID: '',
   },
   reducers: {
      // handle here!
      updateProductID: (state, action) => {
         state.productID = action.payload;
      },
   },
});
