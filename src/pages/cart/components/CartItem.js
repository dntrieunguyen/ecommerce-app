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
      if (window.confirm('Do you want to delete this ?')) {
         dispatch(cartSlice.actions.DELETE_CART(id));
      }
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
         <tr>
            <td>
               <img src={img} width="50px" alt="" />
            </td>
            <th>{name}</th>
            <td>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</td>
            <td>
               <FontAwesomeIcon
                  onClick={handleMinusQuantityBtn}
                  icon={faBackward}
                  className="cursor-pointer hover:text-warning"
               />
               <span className="px-2">{quantity}</span>
               <FontAwesomeIcon
                  onClick={handlePlusQuantityBtn}
                  icon={faForward}
                  className="cursor-pointer hover:text-warning"
               />
            </td>
            <td>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</td>
            <td>
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
