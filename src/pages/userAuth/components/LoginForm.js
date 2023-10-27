import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSlice } from '../../../redux/reducer/userAuthSlice';
import { loginSubmitValidate } from '../../../services/validation';
import { cartSlice } from '../../../redux/reducer/cartSlice';

export default function LoginForm({ handleShowForm }) {
   const [user, setUser] = useState({
      email: '',
      password: '',
   });

   const [errorMessage, setErrorMessage] = useState({
      email: '',
      password: '',
   });
   const userList = useSelector(state => state.userAuth.userList);
   const userCart = useSelector(state => state.userAuth.userCart);

   const dispatch = useDispatch();

   const handleUserEmailChange = e => {
      const value = e.target.value;
      setUser(prev => ({ ...prev, email: value }));

      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, email: '' });
      }
   };
   const handleUserPasswordChange = e => {
      const value = e.target.value;
      setUser(prev => ({ ...prev, password: value }));

      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, password: '' });
      }
   };
   const handleSignInBtn = e => {
      e.preventDefault();

      const newUser = {
         email: user.email,
         password: user.password,
      };

      const { email, password } = newUser;

      const isValid = loginSubmitValidate(
         email,
         password,
         userList,
         setErrorMessage,
      );

      if (isValid === false) {
         setUser({ ...user, password: '' });
      }
      const userCartChange = userCart;

      if (isValid) {
         if (userCartChange.length > 0) {
            const userCartFilter = userCartChange.find(
               item => item.email === email,
            );
            console.log(userCartFilter);
            dispatch(
               cartSlice.actions.UPDATE_CART_LOGIN(userCartFilter?.cartItems),
            );
         }
         dispatch(userAuthSlice.actions.LOGIN(newUser));
         alert('Login Success !!!');

         setUser({
            email: '',
            password: '',
         });
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
                  htmlFor="email"
                  className="text-sm font-[500] cursor-pointer "
               >
                  Email
               </label>
               <input
                  id="email"
                  onChange={handleUserEmailChange}
                  value={user?.email}
                  type="email"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your name address ..."
               />
               <span className="h-[10px] text-error text-sm">
                  {errorMessage.email}
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
                  value={user.password}
                  id="password"
                  type="password"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your password ..."
               />
               <span className="h-[10px] text-error text-sm">
                  {errorMessage.password}
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
