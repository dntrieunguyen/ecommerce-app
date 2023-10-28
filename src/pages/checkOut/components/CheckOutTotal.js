import React from 'react';
import { useSelector } from 'react-redux';

export default function CheckOutTotal() {
   const cartItems = useSelector(state => state.cart.cartItems);
   const cartTotal = useSelector(state => state.cart.cart);

   return (
      <>
         <h2>YOUR ORDER</h2>
         {cartItems.map(item => (
            <div key={item.id} className="checkout__items">
               <h4>{item.name}</h4>
               <p>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  <span>x {item.quantity}</span>
               </p>
            </div>
         ))}

         <div className="checkout__items__total">
            <h4>TOTAL</h4>
            <p>
               {cartTotal.total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
               VND
            </p>
         </div>
      </>
   );
}
