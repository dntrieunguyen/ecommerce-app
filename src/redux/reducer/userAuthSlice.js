import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
   name: 'userAuth',
   initialState: {
      userList: [
         /*
       {
           name:'',
           password:'',
       }
   */
      ],
      isAuthentication: false,
   },

   reducers: {
      LOGIN: (state, action) => {
         //handle
         const payload = action.payload; // payload: {name:'',password:''}

         const user = state.userList.find(user => user.name === payload.name);

         user && user.password === payload.password
            ? (state.isAuthentication = true)
            : (state.isAuthentication = false);

         //validate
      },
      LOGOUT: (state, action) => {
         //handle
         const payload = action.payload;

         const updateUserList = state.userList;

         state.userList = updateUserList.filter(
            user => user.name !== payload.name,
         );

         state.isAuthentication = false;
      },
      REGISTER: (state, action) => {
         //handle
         const payload = action.payload;
         const updateUserList = state.userList;
         const checkUser = updateUserList.findIndex(
            item => item.name === payload.name,
         );

         if (checkUser === -1) {
            state.userList = updateUserList.push(payload);
         }
         //validate
      },
   },
});
