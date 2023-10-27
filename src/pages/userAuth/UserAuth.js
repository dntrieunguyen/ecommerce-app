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
   const handleShowForm = () => {
      setShowAuthForm(!showAuthForm);
   };
   return (
      <>
         <Navbar></Navbar>
         <div className="bg-center bg-cover user-auth">
            <div className="relative w-full h-full">
               {showAuthForm && (
                  <RegisterForm handleShowForm={handleShowForm}></RegisterForm>
               )}
               {!showAuthForm && (
                  <LoginForm handleShowForm={handleShowForm}></LoginForm>
               )}
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
