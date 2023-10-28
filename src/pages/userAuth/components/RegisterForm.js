import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSlice } from '../../../redux/reducer/userAuthSlice';
import { registerSubmitValidate } from '../../../services/validation.js';

export default function RegisterForm({ handleShowForm }) {
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
   });

   const userList = useSelector(state => state.userAuth.userList);

   const dispatch = useDispatch();

   const handleNameChange = e => {
      const value = e.target.value;
      setNewUser({ ...newUser, name: value });
      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, name: '' });
      }
      // console.log('name >>>', value);
   };
   const handleEmailChange = e => {
      const value = e.target.value;
      setNewUser({ ...newUser, email: value });
      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, email: '' });
      }
      // console.log('email >>>', value);
   };
   const handlePasswordChange = e => {
      const value = e.target.value;
      setNewUser({ ...newUser, password: value });
      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, password: '' });
      }
      // console.log('password >>>', value);
   };
   const handlePhoneChange = e => {
      const value = e.target.value;
      setNewUser({ ...newUser, phone: value });
      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, phone: '' });
      }
      // console.log('phone >>>', value);
   };

   const [errorMessage, setErrorMessage] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
   });

   const handleClickSignUpBtn = e => {
      e.preventDefault();
      //handle

      const updateUser = {
         name: newUser?.name,
         email: newUser?.email,
         password: newUser?.password,
         phone: newUser?.phone,
      };

      const { name, email, password, phone } = updateUser;

      const valid = registerSubmitValidate(
         name,
         email,
         password,
         phone,
         userList,
         setErrorMessage,
      );

      if (valid) {
         dispatch(userAuthSlice.actions.REGISTER(updateUser));
         alert('Register Success');
         setNewUser({ name: '', email: '', password: '', phone: '' });
         handleShowForm();
      }
   };

   return (
      <div className="singup__form">
         <form className="slide-in-bottom" aria-label="signup-form">
            <h2>SIGN UP</h2>
            <div className="singup__form__container">
               <label htmlFor="name">FULLNAME</label>
               <input
                  value={newUser?.name}
                  onChange={handleNameChange}
                  id="name"
                  type="name"
                  placeholder="Enter your full name..."
               />
               <span>{errorMessage?.name}</span>
            </div>
            <div className="singup__form__container">
               <label htmlFor="email">EMAIL</label>
               <input
                  value={newUser?.email}
                  onChange={handleEmailChange}
                  id="email"
                  type="email"
                  placeholder="Enter your email address..."
               />
               <span>{errorMessage?.email}</span>
            </div>
            <div className="singup__form__container">
               <label htmlFor="password">PASSWORD</label>
               <input
                  value={newUser?.password}
                  onChange={handlePasswordChange}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
               />
               <span>{errorMessage?.password}</span>
            </div>
            <div className="singup__form__container">
               <label htmlFor="email">PHONE</label>
               <input
                  value={newUser?.phone}
                  onChange={handlePhoneChange}
                  id="phone"
                  type="phone"
                  placeholder="Enter your phone..."
               />
               <span>{errorMessage?.phone}</span>
            </div>

            <button
               onClick={handleClickSignUpBtn}
               type="submit"
               className="Btn__Signup"
            >
               Sign Up
            </button>
            <div className="form__text">
               <p>Login?</p>
               <p onClick={handleShowForm}>Click</p>
            </div>
         </form>
      </div>
   );
}
