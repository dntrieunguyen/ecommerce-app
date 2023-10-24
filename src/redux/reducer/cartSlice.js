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
            id: '',
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
        state.cartItems.push(action.payload) => payload là id
        */

         const currentCartItems = state.cartItems;

         const checkItems = currentCartItems.findIndex(
            item => item.id === action.payload.id, // check payload đã có trong cartItems, {} / undefine
         );

         //TH1: cartItems đã tồn tại
         if (currentCartItems.length) {
            //TH1.1: payload không tồn tại trong cartItems
            if (checkItems === -1) {
               state.cartItems.push(action.payload);
            }

            //TH1.2: payload tồn tại trong cartItems
            if (checkItems !== -1) {
               currentCartItems[checkItems].quantity += action.payload.quantity;

               state.cartItems = currentCartItems.map(item => {
                  return item.id === action.payload.id
                     ? currentCartItems[checkItems]
                     : item;
               });
            }
         }

         //TH2: cartItems rỗng
         if (currentCartItems.length === 0) {
            state.cartItems.push(action.payload);
         }

         //Total
         state.cart.totalPrice = state.cartItems.reduce((total, item) => {
            return (total += item.quantity * item.price);
         }, 0);

         state.cart.amount = state.cartItems.reduce((total, item) => {
            return (total += item.quantity);
         }, 0);
      },

      UPPDATE_CART: (state, action) => {
         /*
        Handle here!
        state.carItems.map(item => {
         return item.id === action.payload.id ? action.payload : item 
        }) =>  payload là 1 object

        */
      },

      DELETE_CART: (state, action) => {
         /*
        Handle here!
        state.cartItems.filter( item => item.id !== action.payload) => payload là id
        */
      },
   },
});
