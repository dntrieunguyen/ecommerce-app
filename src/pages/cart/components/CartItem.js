import {
   faBackward,
   faForward,
   faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../redux/reducer/cartSlice';

export default function CartItem({ name, price, quantity, total, img, id }) {
   const dispatch = useDispatch();

   const handleClickDelBtn = () => {
      dispatch(cartSlice.actions.DELETE_CART(id));
   };

   const handlePlusQuantityBtn = () => {
      //handle
      const newQuantity = quantity + 1;
      dispatch(cartSlice.actions.UPPDATE_CART({ quantity: newQuantity, id }));
   };
   const handleMinusQuantityBtn = () => {
      //handle
      if (quantity > 0) {
         const newQuantity = quantity - 1;
         dispatch(
            cartSlice.actions.UPPDATE_CART({ quantity: newQuantity, id }),
         );
      }
   };
   return (
      <>
         <tr className="text-center bg-white border-b">
            <td className="px-6 py-4">
               <img src={img} width="50px" alt="" className="mx-auto" />
            </td>
            <th className="px-6 py-4">{name}</th>
            <td className="px-6 py-4">
               {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </td>
            <td className="px-6 py-4">
               <FontAwesomeIcon
                  onClick={handleMinusQuantityBtn}
                  icon={faBackward}
                  className="cursor-pointer hover:text-warning"
               />
               <span className="px-3">{quantity}</span>
               <FontAwesomeIcon
                  onClick={handlePlusQuantityBtn}
                  icon={faForward}
                  className="cursor-pointer hover:text-warning"
               />
            </td>
            <td className="px-6 py-4">
               {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </td>
            <td className="px-6 py-4 text-center ">
               <FontAwesomeIcon
                  onClick={handleClickDelBtn}
                  icon={faTrash}
                  className="cursor-pointer hover:text-warning"
               />
            </td>
         </tr>
      </>
   );
}
