import React from 'react';
import { useDispatch } from 'react-redux';
import { detailProductSlice } from '../../redux/reducer/detailProductSlice';
import './Product.scss';

export default function Product(props) {
   const dispatch = useDispatch();

   const handleClickProduct = () => {
      const newProductID = props.id;
      const newImg = props.img1;
      dispatch(
         detailProductSlice.actions.updateProductID({
            productID: newProductID,
            img: newImg,
         }),
      );
      props.handleClickProduct(newProductID);
   };
   return (
      <>
         <div className="product scale-in-center">
            <img onClick={handleClickProduct} src={props?.img1} alt="" />

            <div className=" product__content">
               <h4>{props.name}</h4>
               <p>
                  {props.price &&
                     `${props.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VND`}
               </p>
            </div>
         </div>
      </>
   );
}
