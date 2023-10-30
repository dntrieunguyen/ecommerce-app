import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../../redux/reducer/cartSlice';

export default function CartTotal() {
   const [couponText, setCouponText] = useState(''); // Khai báo state 'couponText' và hàm 'setCouponText' để quản lý giá trị nhập vào ô nhập mã giảm giá

   const couponTextRef = useRef(''); // Tạo ref 'couponTextRef' để tham chiếu đến ô nhập mã giảm giá

   const [checkDiscount, setCheckDiscount] = useState(true); // Khai báo state 'checkDiscount' và hàm 'setCheckDiscount' để quản lý trạng thái kiểm tra giảm giá

   const cart = useSelector(state => state.cart.cart); // Lấy thông tin giỏ hàng từ Redux store

   const dispatch = useDispatch(); // Dispatch các action đến Redux store

   const handleApplyCouponChange = e => {
      // Xử lý khi giá trị nhập vào ô nhập mã giảm giá thay đổi
      const newCouponText = e.target.value; // Lấy giá trị mới từ sự kiện thay đổi
      setCouponText(newCouponText); // Cập nhật state 'couponText' với giá trị mới
   };

   const handleApplyCouponBtn = e => {
      e.preventDefault();
      // Xử lý khi nhấp vào nút áp dụng mã giảm giá
      // Kiểm tra mã giảm giá
      const checkDiscountValue = cart.coupon.hasOwnProperty(couponText); // Kiểm tra xem mã giảm giá có tồn tại trong giỏ hàng hay không

      setCheckDiscount(checkDiscountValue); // Cập nhật trạng thái kiểm tra giảm giá

      if (checkDiscountValue) {
         const coupon = cart.coupon[couponText]; // Lấy thông tin về mã giảm giá từ giỏ hàng

         dispatch(cartSlice.actions.UPDATE_TOTALWITHCOUPON(coupon)); // Gửi action UPDATE_TOTALWITHCOUPON với thông tin về mã giảm giá để cập nhật tổng giá trị giỏ hàng
      }

      setCouponText(''); // Xóa giá trị trong ô nhập mã giảm giá
      couponTextRef.current.focus(); // Đưa con trỏ vào ô nhập mã giảm giá
      // Xử lý khác (nếu có)
   };
   return (
      <>
         <div className="cart__total">
            <h2>CART TOTAL</h2>

            <div className="cart__items__subtotal">
               <h4>SUBTOTAL</h4>
               <p>
                  {cart.subTotal
                     .toString()
                     .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  VND
               </p>
            </div>
            <div className="cart__items__total">
               <h4>TOTAL</h4>
               <p>
                  {cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  VND
               </p>
            </div>

            <div className="cart_items_action">
               <form aria-label="simple-form">
                  <input
                     ref={couponTextRef}
                     type="text"
                     value={couponText}
                     onChange={handleApplyCouponChange}
                     placeholder="Enter your coupon"
                  />

                  <span
                     className={
                        checkDiscount ? 'text-transparent' : 'text-error p-5'
                     }
                  >
                     Discount Code Không tồn tại
                  </span>

                  <button onClick={handleApplyCouponBtn}>
                     <FontAwesomeIcon icon={faGift} /> Apply coupon
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}
