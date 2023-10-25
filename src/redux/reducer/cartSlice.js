import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
   name: 'cart',

   initialState: {
      cart: {
         coupon: {
            default: 1,
            'discount-25': 0.25,
            'discount-50': 0.5,
            'discount-75': 0.75,
         },

         amount: 0,
         subTotal: 0,
         totalWithCoupon: 0,
         total: 0,
      },

      cartItems: [
         /*
         {
            id: '',
            img: '',
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
         state.cart.subTotal = state.cartItems.reduce((total, item) => {
            return (total += item.quantity * item.price);
         }, 0);

         state.cart.amount = state.cartItems.reduce((total, item) => {
            return (total += item.quantity);
         }, 0);

         state.cart.total = state.cart.subTotal;
      },

      UPPDATE_CART: (state, action) => {
         /*
        Handle here!
        state.carItems.map(item => {
         return item.id === action.payload.id ? action.payload : item 
        }) =>  payload là 1 object

        */

         const payload = action.payload;

         const updateCartItems = state.cartItems;

         const ItemsIndex = updateCartItems.findIndex(
            item => item.id === payload.id,
         );

         if (ItemsIndex !== -1) {
            updateCartItems[ItemsIndex].quantity = payload.quantity;
            updateCartItems[ItemsIndex].total =
               updateCartItems[ItemsIndex].quantity *
               updateCartItems[ItemsIndex].price;
         }

         if (updateCartItems[ItemsIndex].quantity === 0) {
            state.cartItems = updateCartItems.filter(
               item => item.id !== payload.id,
            );
         }

         if (updateCartItems[ItemsIndex].quantity !== 0) {
            state.cartItems = updateCartItems;
         }

         //Total
         state.cart.subTotal = state.cartItems.reduce((total, item) => {
            return (total += item.quantity * item.price);
         }, 0);

         state.cart.amount = state.cartItems.reduce((total, item) => {
            return (total += item.quantity);
         }, 0);

         state.cart.total = state.cart.subTotal;
      },

      DELETE_CART: (state, action) => {
         /*
        Handle here!
        state.cartItems.filter( item => item.id !== action.payload) => payload là id
        */
         const payload = action.payload;
         state.cartItems = state.cartItems.filter(item => item.id !== payload);

         //Total
         state.cart.subTotal = state.cartItems.reduce((total, item) => {
            return (total += item.quantity * item.price);
         }, 0);

         state.cart.amount = state.cartItems.reduce((total, item) => {
            return (total += item.quantity);
         }, 0);

         state.cart.total = state.cart.subTotal;
      },

      UPDATE_TOTALWITHCOUPON: (state, action) => {
         state.cart.totalWithCoupon =
            state.cart.subTotal * (1 - action.payload);

         const updateTotal =
            state.cart.totalWithCoupon && state.cart.totalWithCoupon > 0
               ? state.cart.totalWithCoupon
               : state.cart.subTotal;
         state.cart.total = updateTotal;
      },
   },
});
