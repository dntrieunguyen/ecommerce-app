import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSlice } from '../../../redux/reducer/userAuthSlice';

export default function RegisterForm({ handleShowForm }) {
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
   });

   const errorMessage = useSelector(
      state => state.userAuth.errorMessage.signUpError,
   );

   const dispatch = useDispatch();

   const handleNameChange = e => {
      const value = e.target.value;
      setNewUser({ ...newUser, name: value });
      // console.log('name >>>', value);
   };
   const handleEmailChange = e => {
      const value = e.target.value;
      setNewUser({ ...newUser, email: value });
      // console.log('email >>>', value);
   };
   const handlePasswordChange = e => {
      const value = e.target.value;
      setNewUser({ ...newUser, password: value });
      // console.log('password >>>', value);
   };
   const handlePhoneChange = e => {
      const value = e.target.value;
      setNewUser({ ...newUser, phone: value });
      // console.log('phone >>>', value);
   };

   const handleClickSignUpBtn = e => {
      e.preventDefault();
      //handle

      const updateUser = {
         name: newUser?.name,
         email: newUser?.email,
         password: newUser?.password,
         phone: newUser?.phone,
      };

      dispatch(userAuthSlice.actions.REGISTER(updateUser));
   };

   return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 ">
         <form
            className="w-[400px] slide-in-bottom p-10 bg-white rounded-lg shadow "
            aria-label="signup-form"
         >
            <h2 className="mb-10 text-title font-[500] text-center">SIGN UP</h2>
            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label
                  htmlFor="name"
                  className="text-sm font-medium cursor-pointer "
               >
                  FULLNAME
               </label>
               <input
                  value={newUser?.name}
                  onChange={handleNameChange}
                  id="name"
                  type="name"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your full name..."
               />
               <span className="text-sm text-error h-[10px]">
                  {errorMessage?.name}
               </span>
            </div>
            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label
                  htmlFor="email"
                  className="text-sm font-medium cursor-pointer "
               >
                  EMAIL
               </label>
               <input
                  value={newUser?.email}
                  onChange={handleEmailChange}
                  id="email"
                  type="email"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your email address..."
               />
               <span className="text-sm text-error h-[10px]">
                  {errorMessage?.email}
               </span>
            </div>
            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label
                  htmlFor="password"
                  className="text-sm font-medium cursor-pointer "
               >
                  PASSWORD
               </label>
               <input
                  value={newUser?.password}
                  onChange={handlePasswordChange}
                  id="password"
                  type="password"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your password"
               />
               <span className="text-sm text-error h-[10px]">
                  {errorMessage?.password}
               </span>
            </div>
            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label
                  htmlFor="email"
                  className="text-sm font-medium cursor-pointer "
               >
                  PHONE
               </label>
               <input
                  value={newUser?.phone}
                  onChange={handlePhoneChange}
                  id="phone"
                  type="phone"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your phone..."
               />
               <span className="text-sm text-error h-[10px]">
                  {errorMessage?.phone}
               </span>
            </div>

            <button
               onClick={handleClickSignUpBtn}
               type="submit"
               className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
            >
               Sign Up
            </button>
            <div className="flex items-center justify-center my-5 text-slate-400">
               <p>Login?</p>
               <p
                  className="text-blue-500 underline cursor-pointer ps-3"
                  onClick={handleShowForm}
               >
                  Click
               </p>
            </div>
         </form>
      </div>
   );
}
