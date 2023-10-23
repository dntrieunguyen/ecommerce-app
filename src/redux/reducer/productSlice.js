import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
   name: 'product',

   initialState: [],

   reducers: {
      /* handle here!!*/
      firstState: (state, action) => {
         state = action.payload;
      },
   },
});
