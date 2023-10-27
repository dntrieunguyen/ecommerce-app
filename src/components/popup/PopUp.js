import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { detailProducts } from '../../redux/selector';

export default function PopUp(props) {
   const product = useSelector(detailProducts);
   return (
      <div className="absolute flex items-center justify-center w-full h-full -translate-x-1/2 -translate-y-1/2 pop__containter top-1/2 left-1/2">
         <div
            onClick={props.handleClosePopUp}
            className="absolute w-full h-full bg-[rgba(0,0,0,0.3)] fade-in-fwd transition-all"
         ></div>
         <div className=" w-[700px] bg-white grid grid-cols-2 pop__content z-10 ">
            <img className="h-[450px] p-10" src={product.img1} alt="" />
            <div className="relative flex flex-col justify-between p-10 pop__itemInfo">
               <h4 className="font-[600] text-title">{product.name}</h4>
               <p className="py-5 text-secondary">{`${product.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VND`}</p>
               <p className="text-justify h-[200px] overflow-y-auto pe-3">
                  {product.short_desc}
               </p>
               <div className="mt-5 pop__button">
                  <button className="h-fit" onClick={props.handleViewDetailBtn}>
                     <FontAwesomeIcon icon={faCartShopping} /> View Detail
                  </button>
               </div>
               <div
                  onClick={props.handleClosePopUp}
                  className="absolute cursor-pointer top-2 right-5 pop__closeBtn hover:text-warning"
               >
                  <FontAwesomeIcon icon={faXmark} />
               </div>
            </div>
         </div>
      </div>
   );
}
