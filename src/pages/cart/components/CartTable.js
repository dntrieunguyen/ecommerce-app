import React from 'react';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function CartTable() {
   const headTableCart = [
      'IMAGE',
      'PRODUCT',
      'PRICE',
      'QUANTITY',
      'Total',
      'Remove',
   ];
   return (
      <>
         <table className="w-full text-left text-gray-500">
            <thead className="text-center text-gray-700 uppercase bg-gray-50">
               <tr>
                  {headTableCart.map((item, index) => (
                     <th key={index} scope="col" className="px-6 py-3">
                        {item}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               <CartItem></CartItem>
               <CartItem></CartItem>
               <CartItem></CartItem>
               <CartItem></CartItem>
            </tbody>
            <tfoot>
               <tr className="h-[50px] bg-slate-100 ">
                  <td colSpan={3} className="h-full p-10 ">
                     <Link to="/shop">
                        <span className="cursor-pointer hover:text-warning hover:font-medium">
                           <FontAwesomeIcon icon={faArrowLeft} /> Continue
                           shopping
                        </span>
                     </Link>
                  </td>
                  <td colSpan={3} className="h-full p-10 text-right">
                     <Link to="/checkout">
                        <span className="p-3 border cursor-pointer border-dark hover:bg-black hover:text-light hover:duration-300 hover:font-medium">
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
