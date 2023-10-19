import React from 'react';
import './userAuth.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

export default function UserAuth() {
   return (
      <>
         <Navbar></Navbar>
         <div className="relative bg-center bg-cover user-auth">
            {true && <RegisterForm></RegisterForm>}
            {false && <LoginForm></LoginForm>}
         </div>
         <Footer></Footer>
      </>
   );
}
