import React from 'react';
import { useSelector } from 'react-redux';

export default function CheckOutTotal() {
   const cartItems = useSelector(state => state.cart.cartItems);
   const cartTotal = useSelector(state => state.cart.cart);
   console.log(cartItems);

   return (
      <>
         <h2 className="text-title font-[500]">YOUR ORDER</h2>
         {cartItems.map(item => (
            <div
               key={item.id}
               className="flex justify-between my-5 border-b checkout__items text-[12px]"
            >
               <h4 className="font-[500] flex-1">{item.name}</h4>
               <p className="px-3 text-secondary flex-2">
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  <span className="">x {item.quantity}</span>
               </p>
            </div>
         ))}

         <div className="flex justify-between my-5 checkout__items__total">
            <h4 className="font-[500]">TOTAL</h4>
            <p className="px-3 text-secondary">
               {cartTotal.total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
               VND
            </p>
         </div>
      </>
   );
}
