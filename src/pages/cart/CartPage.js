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
            <div className="cart__content w-[80%] mx-auto my-10">
               <h2 className="font-[500] text-title my-10">SHOPPING CART</h2>
               <div className="grid grid-cols-3 gap-10 cart__detail">
                  <div class="col-span-2 ">
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
