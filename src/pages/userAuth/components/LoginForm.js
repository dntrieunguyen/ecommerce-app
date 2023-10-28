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
      <div className="login__form">
         <form autoComplete="off" aria-label="login-form">
            <h2>SIGN IN</h2>

            <div className="login__form__container">
               <label htmlFor="email">Email</label>
               <input
                  id="email"
                  onChange={handleUserEmailChange}
                  value={user?.email}
                  type="email"
                  placeholder="Enter your name address ..."
               />
               <span>{errorMessage.email}</span>
            </div>
            <div className="login__form__container">
               <label htmlFor="password">PASSWORD</label>
               <input
                  onChange={handleUserPasswordChange}
                  value={user.password}
                  id="password"
                  type="password"
                  placeholder="Enter your password ..."
               />
               <span>{errorMessage.password}</span>
            </div>

            <button
               onClick={handleSignInBtn}
               type="submit"
               className="Btn__Login "
            >
               Sign in
            </button>
            <div className="form__text">
               <p>Create an account?</p>
               <p onClick={handleShowForm}>Sign Up</p>
            </div>
         </form>
      </div>
   );
}
