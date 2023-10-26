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

      errorMessage: {
         logInError: {
            name: '',
            password: '',
         },

         signUpError: {
            name: '',
            email: '',
            password: '',
            phone: '',
         },
      },
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

         const validateData = payload => {
            const { name, email, password, phone } = payload;

            const checkEmail = updateUserList.findIndex(
               item => item.email === payload.email,
            );

            let isValid = true;

            // Kiểm tra name
            if (name.trim().length === 0) {
               state.errorMessage.signUpError.name = 'Please Enter This Field';
               isValid = false;
            } else {
               state.errorMessage.signUpError.name = '';
            }

            // Kiểm tra email
            if (email.trim().length === 0) {
               state.errorMessage.signUpError.email = 'Please Enter This Field';
               isValid = false;
            } else if (checkEmail !== -1) {
               state.errorMessage.signUpError.email =
                  'Email already exists !!!';
               isValid = false;
            } else {
               state.errorMessage.signUpError.email = '';
            }

            // Kiểm tra password
            if (password.trim().length === 0) {
               state.errorMessage.signUpError.password =
                  'Please Enter This Field';
               isValid = false;
            } else if (password.length < 8) {
               state.errorMessage.signUpError.password =
                  'Password must have more than 8 characters';
               isValid = false;
            } else {
               state.errorMessage.signUpError.password = '';
            }

            // Kiểm tra số phone
            if (phone.trim().length === 0) {
               state.errorMessage.signUpError.phone = 'Please Enter This Field';
               isValid = false;
            } else {
               state.errorMessage.signUpError.phone = '';
            }

            return isValid;
         };

         const valid = validateData(payload);

         if (valid) {
            updateUserList.push(payload);
            state.userList = updateUserList;
            state.onLogIn = true;
         }
      },
   },
});
