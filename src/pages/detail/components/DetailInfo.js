import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../redux/reducer/cartSlice';

export default function DetailInfo({ product }) {
   const [carItems, setCartItems] = useState({
      id: '',
      name: '',
      price: 0,
      quantity: 0,
      total: 0,
   });

   const [quantity, setQuantity] = useState(0);

   const dispatch = useDispatch();

   const handleAddtoCartBtn = () => {
      //handle

      const newCartItems = {
         id: product._id.$oid,
         name: product.name,
         price: +product.price,
         quantity: 2,
         total: 0,
      };
      dispatch(cartSlice.actions.ADD_CART(newCartItems));

      setCartItems(newCartItems);
   };

   const handlePlusItems = () => {
      //handle
   };
   const handleMinusItems = () => {
      //handle
   };

   return (
      <>
         <div className="grid grid-cols-2 gap-10 my-10 detail__info">
            <img className="" src={product?.img1} alt="" />
            <div className=" detail__info__content">
               <h2 className="uppercase text-brand font-[500]">
                  {product?.name}
               </h2>
               <p className="my-10 text-lead text-secondary">
                  `$
                  {product?.price
                     .toString()
                     .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  VND`
               </p>
               <p className="text-justify text-content text-secondary">
                  {product?.short_desc}
               </p>
               <div className="flex my-10 detail__info__category">
                  <h4 className="pe-3 font-[500] uppercase">category: </h4>
                  <p className="uppercase">{product?.category}</p>
               </div>
               <div className="flex detail__info__action">
                  <div className="border detail__input w-[35rem] flex justify-between">
                     <span className="p-3 text-secondary">QUANTITY</span>
                     <div className="flex items-center gap-5 px-3">
                        <FontAwesomeIcon
                           className="cursor-pointer hover:text-warning"
                           icon={faBackward}
                        />
                        <span className="font-[500]">1</span>
                        <FontAwesomeIcon
                           className="cursor-pointer hover:text-warning"
                           icon={faForward}
                        />
                     </div>
                  </div>
                  <button onClick={handleAddtoCartBtn}>Add to cart</button>
               </div>
            </div>
         </div>
      </>
   );
}
