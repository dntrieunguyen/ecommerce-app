import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
   name: 'cart',

   initialState: [
      {
         _id: '',
         name: '',
         price: 0,
         category: '',
         coupon: '',
         total: 0,
      },
   ],
   reducers: {
      ADD_CART: (state, action) => {
         /*
        Handle here!
        */
      },

      UPPDATE_CART: (state, action) => {
         /*
        Handle here!
        */
      },

      DELETE_CART: (state, action) => {
         /*
        Handle here!
        */
      },
   },
});
