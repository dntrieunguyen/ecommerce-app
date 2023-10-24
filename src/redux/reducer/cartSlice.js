import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
   name: 'cart',

   initialState: {
      cart: {
         coupon: '',
         amount: 0,
         totalPrice: 0 /*cartItems.reduce((total,item) => {
                            return total += item.total
                        })*/,
      },

      cartItems: [
         /*
         {
            _id: '',
            name: '',
            price: 0,
            quantity: 0,
            total: 0,
         },
        */
      ],
   },
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
