import React from 'react';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartItemSelector } from '../../../redux/selector';

export default function CartTable() {
   const headTableCart = [
      'IMAGE',
      'PRODUCT',
      'PRICE',
      'QUANTITY',
      'Total',
      'Remove',
   ];

   const cartItems = useSelector(cartItemSelector);

   return (
      <>
         <table>
            <thead>
               <tr>
                  {headTableCart.map((item, index) => (
                     <th key={index} scope="col">
                        {item}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {cartItems.length ? (
                  cartItems.map(item => (
                     <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        quantity={item.quantity}
                        total={item.total}
                     ></CartItem>
                  ))
               ) : (
                  <tr className="cart__message">
                     <td colSpan={6}>Chưa có sản phẩm nào trong giỏ hàng</td>
                  </tr>
               )}
            </tbody>
            <tfoot>
               <tr>
                  <td colSpan={3}>
                     <Link to="/shop">
                        <span>
                           <FontAwesomeIcon icon={faArrowLeft} /> Continue
                           shopping
                        </span>
                     </Link>
                  </td>
                  <td colSpan={3}>
                     <Link to="/checkout">
                        <span>
                           Proceed to check out{' '}
                           <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                     </Link>
                  </td>
               </tr>
            </tfoot>
         </table>
      </>
   );
}
