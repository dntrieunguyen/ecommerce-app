import React from 'react';

export default function CartBanner() {
   return (
      <>
         <div className="p-20 bg-slate-100 cart__banner">
            <div className="cart__contaniner w-[80%] mx-auto flex justify-between items-center">
               <h2 className="text-title font-[500]">CART</h2>
               <h2 className="cursor-pointer hover:text-warning text-secondary font-[500]">
                  CART
               </h2>
            </div>
         </div>
      </>
   );
}
