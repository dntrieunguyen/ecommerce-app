import React from 'react';
import { useDispatch } from 'react-redux';
import { detailProductSlice } from '../../redux/reducer/detailProductSlice';
import { Link } from 'react-router-dom';

export default function Product(props) {
   const dispatch = useDispatch();

   const handleClickProduct = () => {
      const newProductID = props.id;
      dispatch(detailProductSlice.actions.updateProductID(newProductID));
   };
   return (
      <>
         <div className="product">
            <Link to="/detail">
               <img
                  onClick={handleClickProduct}
                  src={props.img1}
                  className="h-[300px] hover:opacity-50 hover:duration-500 cursor-pointer"
                  alt=""
               />
            </Link>

            <div className="text-center product__content">
               <h4 className="font-[600]">{props.name}</h4>
               <p className="text-secondary">
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
