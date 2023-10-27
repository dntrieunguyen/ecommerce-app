import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
   name: 'userAuth',
   initialState: {
      userOn: {},

      userList: [
         {
            name: 'admin',
            email: 'admin@gmail.com',
            password: '0123456789',
            phone: '+84123456789',
         },
      ],
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
      },
   },
});
