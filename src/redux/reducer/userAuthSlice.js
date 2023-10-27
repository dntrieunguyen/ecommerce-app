import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
   name: 'userAuth',
   initialState: {
      userOn: {},
      userCart: [], // chưa xử lý
      userList: [],
      onLogIn: false,
      isRegister: false,
   },

   reducers: {
      LOGIN: (state, action) => {
         state.onLogIn = true;
         state.userOn = state.userList.find(
            user => user.email === action.payload.email,
         );
      },
      LOGOUT: (state, action) => {
         //handle
         const payload = action.payload;
         const updateUserCart = state.userCart;

         if (updateUserCart) {
            const checkItems = updateUserCart.findIndex(
               item => item.email === payload.email,
            );

            checkItems === -1
               ? updateUserCart.push(payload)
               : (updateUserCart[checkItems] = payload);
         } else {
            updateUserCart.push(payload);
         }

         state.userCart = updateUserCart;

         state.onLogIn = false;
         state.userOn = {};
      },
      REGISTER: (state, action) => {
         //handle
         const payload = action.payload;

         const updateUserList = state.userList;

         updateUserList.push(payload);
         state.userList = updateUserList;

         state.isRegister = true;
         state.userCart.push({
            email: action.payload.email,
            cartItems: [],
         });
      },
   },
});
