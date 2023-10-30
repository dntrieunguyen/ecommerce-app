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

         couponUsed: '',

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
        
        */

         const currentCartItems = state.cartItems;

         const checkItems = currentCartItems.findIndex(
            item => item.id === action.payload.id, // check payload đã có trong cartItems, index/-1
         );

         //TH1: payload không tồn tại trong cartItems
         if (checkItems === -1) {
            state.cartItems.push(action.payload);
         }

         //TH2: payload tồn tại trong cartItems
         if (checkItems !== -1) {
            currentCartItems[checkItems].quantity += action.payload.quantity;

            state.cartItems = currentCartItems.map(item => {
               return item.id === action.payload.id
                  ? currentCartItems[checkItems]
                  : item;
            });
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

         // Lấy index của payload có trong cart
         const ItemsIndex = updateCartItems.findIndex(
            item => item.id === payload.id,
         );

         // cập nhật lại quantity, total
         updateCartItems[ItemsIndex].quantity = payload.quantity;
         updateCartItems[ItemsIndex].total =
            updateCartItems[ItemsIndex].quantity *
            updateCartItems[ItemsIndex].price;
         if (ItemsIndex !== -1) {
         }

         // Xoá item trong cart nếu quantity = 0
         if (updateCartItems[ItemsIndex].quantity === 0) {
            if (window.confirm('Do you want to delete this product ?')) {
               state.cartItems = updateCartItems.filter(
                  item => item.id !== payload.id,
               );
            } else {
               updateCartItems[ItemsIndex].quantity = 1;

               updateCartItems[ItemsIndex].total =
                  updateCartItems[ItemsIndex].quantity *
                  updateCartItems[ItemsIndex].price;
            }
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

      UPDATE_CART_LOGIN: (state, action) => {
         //handle
         state.cartItems = action.payload;

         //Total
         state.cart.subTotal = state?.cartItems.reduce((total, item) => {
            return (total += item.quantity * item.price);
         }, 0);

         state.cart.amount = state.cartItems.reduce((total, item) => {
            return (total += item.quantity);
         }, 0);

         state.cart.total = state.cart.subTotal;
      },
      UPDATE_CART_LOGOUT: (state, action) => {
         //handle
         state.cartItems = [];

         //Total
         state.cart.subTotal = state.cartItems.reduce((total, item) => {
            return (total += item.quantity * item.price);
         }, 0);

         state.cart.amount = state.cartItems.reduce((total, item) => {
            return (total += item.quantity);
         }, 0);

         state.cart.total = state.cart.subTotal;
      },
   },
});
