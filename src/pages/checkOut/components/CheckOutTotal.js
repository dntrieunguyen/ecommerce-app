import React from 'react';

export default function CheckOutTotal() {
   return (
      <>
         <h2 className="text-title font-[500]">YOUR ORDER</h2>

         <div className="flex justify-between my-5 border-b checkout__items">
            <h4 className="font-[500]">Lorem ipsum dolor sit amet.</h4>
            <p className="px-3 text-secondary">
               10.999.999 <span className="">x 1</span>
            </p>
         </div>
         <div className="flex justify-between my-5 checkout__items__total">
            <h4 className="font-[500]">TOTAL</h4>
            <p className="px-3 text-secondary">10.999.999 VND</p>
         </div>
      </>
   );
}
