import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
   name: 'userAuth',
   initialState: {
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
         //handle
         const payload = action.payload; // payload: {name:'',password:''}

         const user = state.userList.find(user => user.name === payload.name);

         user && user.password === payload.password
            ? (state.onLogIn = true)
            : (state.onLogIn = false);

         //validate
      },
      LOGOUT: (state, action) => {
         //handle
         const payload = action.payload;

         const updateUserList = state.userList;

         state.userList = updateUserList.filter(
            user => user.name !== payload.name,
         );

         state.onLogIn = false;
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
