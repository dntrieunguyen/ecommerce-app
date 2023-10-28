import React from 'react';
import './CheckOutPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import CheckOutForm from './components/CheckOutForm';
import CheckOutBanner from './components/CheckOutBanner';
import CheckOutTotal from './components/CheckOutTotal';
export default function CheckOutPage() {
   return (
      <>
         <Navbar></Navbar>
         <div className="checkout">
            <CheckOutBanner></CheckOutBanner>
            <div className="checkout__content">
               <h2>BILLING DETAILS</h2>
               <div className="checkout__detail">
                  <div className="checkout__form">
                     <CheckOutForm></CheckOutForm>
                  </div>
                  <div className="checkout__total">
                     <CheckOutTotal></CheckOutTotal>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
