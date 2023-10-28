import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../../redux/reducer/cartSlice';
import { detailProductSlice } from '../../../redux/reducer/detailProductSlice';

export default function DetailInfo({ product }) {
   const imgDisplay = useSelector(state => state.detailProduct.img);
   const [carItems, setCartItems] = useState({
      id: '',
      img: '',
      name: '',
      price: 0,
      quantity: 0,
      total: 0,
   });

   const [quantity, setQuantity] = useState(1);

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
      alert(`Added ${newCartItems.name} To Cart Success !!!`);

      setCartItems(newCartItems);
   };

   const handlePlusItems = () => {
      //handle
      const newQuantity = quantity + 1;

      setQuantity(newQuantity);
   };
   const handleMinusItems = () => {
      //handle
      if (quantity > 1) {
         const newQuantity = quantity - 1;
         setQuantity(newQuantity);
      }
   };

   const handleChangeImg = e => {
      //handle
      const newImgDisplay = e.target.currentSrc;
      dispatch(
         detailProductSlice.actions.updateProductID({
            productID: product._id.$oid,
            img: newImgDisplay,
         }),
      );
   };

   return (
      <>
         <div className="detail__info">
            <div className="detail_img">
               <img src={imgDisplay} alt="" />
               <div className="detail_img__container">
                  <img
                     onClick={e => handleChangeImg(e)}
                     src={product?.img2}
                     alt=""
                  />
                  <img
                     onClick={e => handleChangeImg(e)}
                     src={product?.img3}
                     alt=""
                  />
                  <img
                     onClick={e => handleChangeImg(e)}
                     src={product?.img4}
                     alt=""
                  />
               </div>
            </div>
            <div className=" detail__info__content">
               <h2>{product?.name}</h2>
               <p>
                  {product?.price
                     .toString()
                     .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                  VND
               </p>
               <p>{product?.short_desc}</p>
               <div className="detail__info__category">
                  <h4>category: </h4>
                  <p>{product?.category}</p>
               </div>
               <div className="detail__info__action">
                  <div className="detail__input">
                     <span>QUANTITY</span>
                     <div>
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
