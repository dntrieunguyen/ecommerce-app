import React from 'react';

export default function CheckOutBanner() {
   return (
      <>
         <div className="p-20 bg-slate-100 checkout__banner">
            <div className="checkout__contaniner w-[80%] mx-auto flex justify-between items-center">
               <h2 className="text-title font-[500]">CHECKOUT</h2>
               <div className="checkout__breadcrumbs">
                  <ol className="flex">
                     <li className="cursor-pointer hover:text-warning font-[500]">
                        HOME
                     </li>
                     <span className="px-3">/</span>
                     <li className="cursor-pointer hover:text-warning font-[500]">
                        CART
                     </li>
                     <span className="px-3">/</span>
                     <li className="cursor-pointer hover:text-warning text-secondary">
                        CHECKOUT
                     </li>
                  </ol>
               </div>
            </div>
         </div>
      </>
   );
}
