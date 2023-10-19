import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function CartTotal() {
   return (
      <>
         <div className="col-start-3 p-10 cart__total bg-slate-100 h-fit">
            <h2 className="text-title font-[500]">CART TOTAL</h2>

            <div className="flex justify-between my-5 border-b cart__items__total">
               <h4 className="font-[500]">SUBTOTAL</h4>
               <p className="px-3 text-secondary">10.999.999 VND</p>
            </div>
            <div className="flex justify-between my-5 cart__items__total">
               <h4 className="font-[500]">TOTAL</h4>
               <p className="px-3 text-secondary">10.999.999 VND</p>
            </div>

            <div className="cart_items_action">
               <form className="" aria-label="simple-form">
                  <input
                     type="text"
                     placeholder="Enter your coupon"
                     className="w-full p-3 rounded-lg outline-none"
                  />

                  <button className="w-full px-5 py-3 text-white">
                     <FontAwesomeIcon icon={faGift} /> Apply coupon
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}
