import React from 'react';

export default function CheckOutBanner() {
   return (
      <>
         <div className="checkout__banner">
            <div className="checkout__contaniner">
               <h2 className="">CHECKOUT</h2>
               <div className="checkout__breadcrumbs">
                  <ul className="">
                     <li className="">HOME</li>
                     <span className="">/</span>
                     <li className="">CART</li>
                     <span className="">/</span>
                     <li className="">CHECKOUT</li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}
