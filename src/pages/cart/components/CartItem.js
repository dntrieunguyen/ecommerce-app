import {
   faBackward,
   faForward,
   faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function CartItem({ name, price, quantity, total }) {
   return (
      <>
         <tr className="text-center bg-white border-b">
            <td className="px-6 py-4">
               <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417809_sd.jpg;maxHeight=640;maxWidth=550"
                  width="50px"
                  alt=""
                  className="mx-auto"
               />
            </td>
            <th className="px-6 py-4">{name}</th>
            <td className="px-6 py-4">{price}</td>
            <td className="px-6 py-4">
               <FontAwesomeIcon
                  icon={faBackward}
                  className="cursor-pointer hover:text-warning"
               />
               <span className="px-3">{quantity}</span>
               <FontAwesomeIcon
                  icon={faForward}
                  className="cursor-pointer hover:text-warning"
               />
            </td>
            <td className="px-6 py-4">{total}</td>
            <td className="px-6 py-4 text-center ">
               <FontAwesomeIcon
                  icon={faTrash}
                  className="cursor-pointer hover:text-warning"
               />
            </td>
         </tr>
      </>
   );
}
