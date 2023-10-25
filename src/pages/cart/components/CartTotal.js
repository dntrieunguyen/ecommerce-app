import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../../redux/reducer/cartSlice';

export default function CartTotal() {
   const [couponText, setCouponText] = useState('');
   const couponTextRef = useRef('');

   const [checkDiscount, setCheckDiscount] = useState(true);

   const cart = useSelector(state => state.cart.cart);

   console.log(cart);

   const dispatch = useDispatch();

   const handleApplyCouponChange = e => {
      //handle
      const newCouponText = e.target.value;
      setCouponText(newCouponText);
   };
   const handleApplyCouponBtn = e => {
      e.preventDefault();
      //Check coupon code
      const checkDiscountValue = cart.coupon.hasOwnProperty(couponText);

      setCheckDiscount(checkDiscountValue);

      if (checkDiscountValue) {
         const coupon = cart.coupon[couponText];

         dispatch(cartSlice.actions.UPDATE_TOTALWITHCOUPON(coupon));
      }

      setCouponText('');
      couponTextRef.current.focus();
      //handle
   };
   return (
      <>
         <div className="col-start-3 p-10 cart__total bg-slate-100 h-fit">
            <h2 className="text-title font-[500]">CART TOTAL</h2>

            <div className="flex justify-between my-5 border-b cart__items__total">
               <h4 className="font-[500]">SUBTOTAL</h4>
               <p className="px-3 text-secondary">
                  {cart.subTotal
                     .toString()
                     .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  VND
               </p>
            </div>
            <div className="flex justify-between my-5 cart__items__total">
               <h4 className="font-[500]">TOTAL</h4>
               <p className="px-3 text-secondary">
                  {cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  VND
               </p>
            </div>

            <div className="cart_items_action">
               <form className="" aria-label="simple-form">
                  <input
                     ref={couponTextRef}
                     type="text"
                     value={couponText}
                     onChange={handleApplyCouponChange}
                     placeholder="Enter your coupon"
                     className="w-full p-3 rounded-lg outline-none"
                  />

                  <span
                     className={
                        checkDiscount ? 'text-transparent' : 'text-error p-5'
                     }
                  >
                     Discount Code Không tồn tại
                  </span>

                  <button
                     onClick={handleApplyCouponBtn}
                     className="w-full px-5 py-3 mt-3 text-white"
                  >
                     <FontAwesomeIcon icon={faGift} /> Apply coupon
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}
