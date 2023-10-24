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
         <div className="my-10 toptrend">
            <div className="uppercase toptrend__title">
               <h4 className=" text-secondary">make the hard way</h4>
               <h2 className="text-lead">top trending products</h2>
            </div>
            <div className="grid grid-cols-4 gap-5 toptrend__content">
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
