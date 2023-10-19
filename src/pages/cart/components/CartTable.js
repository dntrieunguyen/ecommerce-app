import React from 'react';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CartTable() {
   return (
      <>
         <table class="w-full text-left text-gray-500">
            <thead class=" text-gray-700 uppercase bg-gray-50 text-center">
               <tr>
                  <th scope="col" class="px-6 py-3">
                     IMAGE
                  </th>
                  <th scope="col" class="px-6 py-3">
                     PRODUCT
                  </th>
                  <th scope="col" class="px-6 py-3">
                     PRICE
                  </th>
                  <th scope="col" class="px-6 py-3">
                     QUANTITY
                  </th>
                  <th scope="col" class="px-6 py-3">
                     Total
                  </th>
                  <th scope="col" class="px-6 py-3">
                     Remove
                  </th>
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
                     <span className="cursor-pointer hover:text-warning hover:font-medium">
                        <FontAwesomeIcon icon={faArrowLeft} /> Continue shopping
                     </span>
                  </td>
                  <td colSpan={3} className="h-full p-10 text-right">
                     <span className="p-3 border cursor-pointer border-dark hover:bg-black hover:text-light hover:duration-300 hover:font-medium">
                        Proceed to check out{' '}
                        <FontAwesomeIcon icon={faArrowRight} />
                     </span>
                  </td>
               </tr>
            </tfoot>
         </table>
      </>
   );
}
