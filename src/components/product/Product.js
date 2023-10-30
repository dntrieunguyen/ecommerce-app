import React from 'react';
import { useDispatch } from 'react-redux';
import { detailProductSlice } from '../../redux/reducer/detailProductSlice';
import './Product.scss';

export default function Product(props) {
   const dispatch = useDispatch(); // Sử dụng useDispatch hook để gửi các action đến Redux store

   const handleClickProduct = () => {
      const newProductID = props.id; // Lấy productID từ props (giả sử props.id là productID)
      const newImg = props.img1; // Lấy img từ props (giả sử props.img1 là img)
      dispatch(
         detailProductSlice.actions.updateProductID({
            productID: newProductID,
            img: newImg,
         }),
      ); // Gửi action updateProductID với productID và img mới đến Redux store
      props.handleClickProduct(newProductID); // Gọi hàm handleClickProduct được truyền vào từ props và truyền newProductID vào
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
