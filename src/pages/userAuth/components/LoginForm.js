import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSlice } from '../../../redux/reducer/userAuthSlice';

export default function LoginForm({ handleShowForm }) {
   const [userName, setUserName] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const onLogIn = useSelector(state => state.userAuth.onLogIn);

   const dispatch = useDispatch();

   const handleUserNameChange = e => {
      setUserName(e.target.value);
   };
   const handleUserPasswordChange = e => {
      setUserPassword(e.target.value);
   };

   const handleSignInBtn = e => {
      e.preventDefault();

      const newUser = {
         name: userName,
         password: userPassword,
      };

      const isValid = handleValidateData(newUser);

      if (isValid) {
         dispatch(userAuthSlice.actions.LOGIN(newUser));
         setUserName('');
         setUserPassword('');
      }
   };

   const handleValidateData = user => {
      const { name, password } = user;

      if (name.trim().length === 0 || password.trim().length === 0) {
         setErrorMessage('Please Enter This Filed !!!');
         return false;
      }
   };

   return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 ">
         <form
            autoComplete="off"
            className="w-[400px] p-10 bg-white rounded-lg shadow slide-in-bottom"
            aria-label="login-form"
         >
            <h2 className="mb-10 text-title font-[500] text-center">SIGN IN</h2>

            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label
                  htmlFor="name"
                  className="text-sm font-[500] cursor-pointer "
               >
                  Name
               </label>
               <input
                  id="name"
                  onChange={handleUserNameChange}
                  value={userName}
                  type="name"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your name address ..."
               />
               <span className="h-[10px] text-error text-sm">
                  {userName.trim().length === 0 && errorMessage}
               </span>
            </div>
            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label
                  htmlFor="password"
                  className="text-sm font-[500] cursor-pointer "
               >
                  PASSWORD
               </label>
               <input
                  onChange={handleUserPasswordChange}
                  value={userPassword}
                  id="password"
                  type="password"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your password ..."
               />
               <span className="h-[10px] text-error text-sm">
                  {errorMessage}
               </span>
            </div>

            <button
               onClick={handleSignInBtn}
               type="submit"
               className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
            >
               Sign in
            </button>
            <div className="flex items-center justify-center my-5 text-slate-400">
               <p>Create an account?</p>
               <p
                  className="text-blue-500 underline cursor-pointer ps-3"
                  onClick={handleShowForm}
               >
                  Sign Up
               </p>
            </div>
         </form>
      </div>
   );
}
