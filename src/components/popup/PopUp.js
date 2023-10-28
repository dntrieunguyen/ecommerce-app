import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { detailProducts } from '../../redux/selector';
import './PopUp.scss';

export default function PopUp(props) {
   const product = useSelector(detailProducts);
   return (
      <div className="pop__containter">
         <div
            onClick={props.handleClosePopUp}
            className="overplay fade-in-fwd"
         ></div>
         <div className="pop__content">
            <img src={product.img1} alt="" />
            <div className="pop__itemInfo">
               <h4>{product.name}</h4>
               <p>{`${product.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VND`}</p>
               <p>{product.short_desc}</p>
               <div>
                  <button onClick={props.handleViewDetailBtn}>
                     <FontAwesomeIcon icon={faCartShopping} /> View Detail
                  </button>
               </div>
               <div onClick={props.handleClosePopUp} className="pop__closeBtn">
                  <FontAwesomeIcon icon={faXmark} />
               </div>
            </div>
         </div>
      </div>
   );
}
