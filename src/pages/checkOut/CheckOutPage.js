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
            <div className="checkout__content w-[80%] mx-auto my-10">
               <h2 className="font-[500] text-title my-10">BILLING DETAILS</h2>
               <div className="grid grid-cols-3 gap-10 checkout__detail">
                  <div className="col-span-2 checkout__form">
                     <CheckOutForm></CheckOutForm>
                  </div>
                  <div className="col-start-3 p-10 checkout__total bg-slate-100 h-fit">
                     <CheckOutTotal></CheckOutTotal>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
