import React, { useState } from 'react';
import './userAuth.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

export default function UserAuth() {
   const [showAuthForm, setShowAuthForm] = useState(false);
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
