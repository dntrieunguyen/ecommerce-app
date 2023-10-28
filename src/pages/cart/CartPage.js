import React from 'react';
import './CartPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import CartTotal from './components/CartTotal';
import CartTable from './components/CartTable';
import CartBanner from './components/CartBanner';
export default function CartPage() {
   return (
      <>
         <Navbar></Navbar>
         <div className="cart">
            <CartBanner></CartBanner>
            <div className="cart__content ">
               <h2>SHOPPING CART</h2>
               <div className="cart__detail">
                  <div>
                     <CartTable></CartTable>
                  </div>
                  <CartTotal></CartTotal>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
