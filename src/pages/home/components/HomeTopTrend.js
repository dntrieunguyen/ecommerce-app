import React from 'react';
import Product from '../../../components/product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from '../../../redux/selector';
import PopUp from '../../../components/popup/PopUp';
import { showPopSlice } from '../../../redux/reducer/showPopSlice';
import { useNavigate } from 'react-router-dom';

export default function HomeTopTrend() {
   const productsList = useSelector(productListSelector);

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const isShowPop = useSelector(state => state.popup.isShowPop);

   const handleClickProduct = () => {
      //handle
      dispatch(showPopSlice.actions.SHOW_POPUP(true));
      window.scrollTo({ top: 1100, behavior: 'smooth' });
   };

   const handleClosePopUp = () => {
      //handle
      dispatch(showPopSlice.actions.HIDE_POPUP(false));
   };

   const handleViewDetailBtn = () => {
      dispatch(showPopSlice.actions.HIDE_POPUP(false));
      navigate('/detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <>
         <div className="toptrend">
            <div className="toptrend__title">
               <h4 className="">make the hard way</h4>
               <h2 className="">top trending products</h2>
            </div>
            <div className="toptrend__content">
               {productsList &&
                  productsList.map(product => (
                     <Product
                        key={product._id.$oid}
                        id={product._id.$oid}
                        img1={product.img1}
                        name={product.name}
                        price={product.price}
                        handleClickProduct={handleClickProduct}
                     ></Product>
                  ))}
            </div>
         </div>
         {isShowPop && (
            <PopUp
               handleClosePopUp={handleClosePopUp}
               handleViewDetailBtn={handleViewDetailBtn}
            ></PopUp>
         )}
      </>
   );
}
