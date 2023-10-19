import React from 'react';
import './userAuth.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

export default function UserAuth() {
   // const isShow = false;
   const isShow = true;
   return (
      <>
         <Navbar></Navbar>
         <div className="bg-center bg-cover user-auth">
            <div className="relative w-full h-full">
               {isShow && <RegisterForm></RegisterForm>}
               {!isShow && <LoginForm></LoginForm>}
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
