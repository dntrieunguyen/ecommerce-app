import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../../redux/reducer/cartSlice';
import { detailProductSlice } from '../../../redux/reducer/detailProductSlice';

export default function DetailInfo({ product }) {
   const imgDisplay = useSelector(state => state.detailProduct.img); // Lấy đường dẫn hình ảnh hiển thị từ Redux store

   const [carItems, setCartItems] = useState({
      id: '',
      img: '',
      name: '',
      price: 0,
      quantity: 0,
      total: 0,
   }); // Khai báo state 'carItems' và hàm 'setCartItems' để quản lý thông tin về sản phẩm trong giỏ hàng

   const [quantity, setQuantity] = useState(1); // Khai báo state 'quantity' và hàm 'setQuantity' để quản lý số lượng sản phẩm

   const dispatch = useDispatch(); // Dispatch các action đến Redux store

   const handleAddtoCartBtn = () => {
      // Xử lý khi nhấp vào nút thêm vào giỏ hàng
      // Xử lý khác (nếu có)

      const newCartItems = {
         id: product._id.$oid,
         img: product.img1,
         name: product.name,
         price: +product.price,
         quantity: quantity,
         total: quantity * +product.price,
      }; // Tạo thông tin về sản phẩm mới trong giỏ hàng

      dispatch(cartSlice.actions.ADD_CART(newCartItems)); // Gửi action ADD_CART với thông tin về sản phẩm mới để thêm vào giỏ hàng
      alert(`Added ${newCartItems.name} To Cart Success !!!`); // Hiển thị thông báo thành công

      setCartItems(newCartItems); // Cập nhật state 'cartItems' với thông tin về sản phẩm mới
   };

   const handlePlusItems = () => {
      // Xử lý khi nhấp vào nút tăng số lượng sản phẩm
      // Xử lý khác (nếu có)
      const newQuantity = quantity + 1; // Tăng số lượng lên 1 đơn vị

      setQuantity(newQuantity); // Cập nhật state 'quantity' với số lượng mới
   };

   const handleMinusItems = () => {
      // Xử lý khi nhấp vào nút giảm số lượng sản phẩm
      // Xử lý khác (nếu có)
      if (quantity > 1) {
         // Kiểm tra số lượng hiện tại lớn hơn 1
         const newQuantity = quantity - 1; // Giảm số lượng đi 1 đơn vị
         setQuantity(newQuantity); // Cập nhật state 'quantity' với số lượng mới
      }
   };

   const handleChangeImg = e => {
      // Xử lý khi hình ảnh hiển thị thay đổi
      // Xử lý khác (nếu có)
      const newImgDisplay = e.target.currentSrc; // Lấy đường dẫn mới của hình ảnh hiển thị từ sự kiện thay đổi
      dispatch(
         detailProductSlice.actions.updateProductID({
            productID: product._id.$oid,
            img: newImgDisplay,
         }),
      ); // Gửi action updateProductID với thông tin về ID sản phẩm và đường dẫn mới của hình ảnh để cập nhật hình ảnh hiển thị
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
