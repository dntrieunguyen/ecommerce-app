import React, { Suspense } from 'react';
// import Product from '../../../components/product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { productListSelector } from '../../../redux/selector';
import PopUp from '../../../components/popup/PopUp';
import { showPopSlice } from '../../../redux/reducer/showPopSlice';
import { useNavigate } from 'react-router-dom';

const Product = React.lazy(() => import('../../../components/product/Product'));

export default function HomeTopTrend() {
   const productsList = useSelector(productListSelector); // Lấy danh sách sản phẩm từ Redux state

   const dispatch = useDispatch(); // Sử dụng useDispatch hook để gửi các action đến Redux store

   const navigate = useNavigate(); // Sử dụng useNavigate hook để điều hướng tới các trang khác trong ứng dụng

   const detailProduct = useSelector(state => state.detailProduct); // Lấy thông tin sản phẩm chi tiết từ Redux state

   const isShowPop = useSelector(state => state.popup.isShowPop); // Lấy trạng thái hiển thị của popup từ Redux state

   const handleClosePopUp = () => {
      // Xử lý khi đóng popup
      dispatch(showPopSlice.actions.HIDE_POPUP(false)); // Gửi action để ẩn popup
   };

   const handleViewDetailBtn = () => {
      // Xử lý khi click nút xem chi tiết
      dispatch(showPopSlice.actions.HIDE_POPUP(false)); // Gửi action để ẩn popup
      navigate(`/detail/${detailProduct.productID}`); // Điều hướng tới trang chi tiết sản phẩm
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Di chuyển đến đầu trang một cách mượt mà
   };

   const handleClickProduct = () => {
      // Xử lý khi click sản phẩm
      dispatch(showPopSlice.actions.SHOW_POPUP(true)); // Gửi action để hiển thị popup
      window.scrollTo({ top: 1100, behavior: 'smooth' }); // Di chuyển đến vị trí cụ thể trên trang một cách mượt mà
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
                     <Suspense key={product._id.$oid}>
                        <Product
                           id={product._id.$oid}
                           img1={product.img1}
                           name={product.name}
                           price={product.price}
                           handleClickProduct={handleClickProduct}
                        ></Product>
                     </Suspense>
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
