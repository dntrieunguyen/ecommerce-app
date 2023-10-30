import {
   faBackward,
   faForward,
   faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../redux/reducer/cartSlice';

export default function CartItem({ name, price, quantity, total, img, id }) {
   const dispatch = useDispatch(); // Dispatch các action đến Redux store

   const handleClickDelBtn = () => {
      // Xử lý khi nhấp vào nút xóa
      if (window.confirm('Do you want to delete this ?')) {
         // Xác nhận người dùng muốn xóa
         dispatch(cartSlice.actions.DELETE_CART(id)); // Gửi action DELETE_CART với ID của mặt hàng cần xóa
      }
   };

   const handlePlusQuantityBtn = () => {
      // Xử lý khi nhấp vào nút tăng số lượng
      const newQuantity = quantity + 1; // Tăng số lượng lên 1 đơn vị
      dispatch(cartSlice.actions.UPPDATE_CART({ quantity: newQuantity, id })); // Gửi action UPPDATE_CART với số lượng mới và ID của mặt hàng
   };

   const handleMinusQuantityBtn = () => {
      // Xử lý khi nhấp vào nút giảm số lượng
      if (quantity > 0) {
         // Kiểm tra số lượng hiện tại lớn hơn 0
         const newQuantity = quantity - 1; // Giảm số lượng đi 1 đơn vị
         dispatch(
            cartSlice.actions.UPPDATE_CART({ quantity: newQuantity, id }),
         ); // Gửi action UPPDATE_CART với số lượng mới và ID của mặt hàng
      }
   };
   return (
      <>
         <tr>
            <td>
               <img src={img} width="50px" alt="" />
            </td>
            <th>{name}</th>
            <td>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</td>
            <td>
               <FontAwesomeIcon
                  onClick={handleMinusQuantityBtn}
                  icon={faBackward}
                  className="cursor-pointer hover:text-warning"
               />
               <span className="px-2">{quantity}</span>
               <FontAwesomeIcon
                  onClick={handlePlusQuantityBtn}
                  icon={faForward}
                  className="cursor-pointer hover:text-warning"
               />
            </td>
            <td>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</td>
            <td>
               <FontAwesomeIcon
                  onClick={handleClickDelBtn}
                  icon={faTrash}
                  className="cursor-pointer hover:text-warning"
               />
            </td>
         </tr>
      </>
   );
}
