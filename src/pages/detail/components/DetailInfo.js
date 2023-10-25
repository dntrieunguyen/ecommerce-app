import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../redux/reducer/cartSlice';

export default function DetailInfo({ product }) {
   const [carItems, setCartItems] = useState({
      id: '',
      img: '',
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
         img: product.img1,
         name: product.name,
         price: +product.price,
         quantity: quantity,
         total: quantity * +product.price,
      };
      dispatch(cartSlice.actions.ADD_CART(newCartItems));

      setCartItems(newCartItems);
   };

   const handlePlusItems = () => {
      //handle
      const newQuantity = quantity + 1;

      setQuantity(newQuantity);
   };
   const handleMinusItems = () => {
      //handle
      if (quantity > 0) {
         const newQuantity = quantity - 1;
         setQuantity(newQuantity);
      }
   };

   return (
      <>
         <div className="grid grid-cols-2 gap-10 my-10 detail__info">
            <div className="grid grid-cols-5 gap-5">
               <img
                  className="col-span-4 col-start-2"
                  src={product?.img1}
                  alt=""
               />
               <div className="flex flex-col col-start-1 row-start-1 gap-5">
                  <img src={product?.img2} alt="" />
                  <img src={product?.img3} alt="" />
                  <img src={product?.img4} alt="" />
               </div>
            </div>
            <div className=" detail__info__content">
               <h2 className="uppercase text-brand font-[500]">
                  {product?.name}
               </h2>
               <p className="my-10 text-lead text-secondary">
                  {product?.price
                     .toString()
                     .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  VND
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
                           onClick={handleMinusItems}
                           className="cursor-pointer hover:text-warning"
                           icon={faBackward}
                        />
                        <span className="font-[500]">{quantity}</span>
                        <FontAwesomeIcon
                           onClick={handlePlusItems}
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
