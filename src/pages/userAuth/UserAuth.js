import React, { useState } from 'react';
import './userAuth.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { useSelector } from 'react-redux';

export default function UserAuth() {
   const isRegister = useSelector(state => state?.UserAuth?.isRegister);
   const [showAuthForm, setShowAuthForm] = useState(isRegister);
   const onLogIn = useSelector(state => state.userAuth.onLogIn);
   const user = useSelector(state => state.userAuth.userOn);
   const handleShowForm = () => {
      setShowAuthForm(!showAuthForm);
   };
   return (
      <>
         <Navbar></Navbar>
         <div className="user-auth">
            <div className="user-auth__container">
               {onLogIn === true ? (
                  <span className="user-auth__message">
                     WELCOME {user.name}
                  </span>
               ) : (
                  <>
                     {showAuthForm && (
                        <RegisterForm
                           handleShowForm={handleShowForm}
                        ></RegisterForm>
                     )}
                     {!showAuthForm && (
                        <LoginForm handleShowForm={handleShowForm}></LoginForm>
                     )}
                  </>
               )}{' '}
            </div>
         </div>

         <Footer></Footer>
      </>
   );
}
