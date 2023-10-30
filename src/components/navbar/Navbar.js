import React, { useState } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSlice } from '../../redux/reducer/userAuthSlice';
import { cartSlice } from '../../redux/reducer/cartSlice';
import { filterProductsSlice } from '../../redux/reducer/filterProductsSlice';
export default function Navbar() {
   const cart = useSelector(state => state.cart.cart); // Lấy thông tin giỏ hàng từ Redux store
   const [isShowCartExpand, setIsShowCartExpand] = useState(false); // Quản lý trạng thái hiển thị giỏ hàng mở rộng
   const userOn = useSelector(state => state.userAuth.userOn); // Lấy thông tin người dùng đã đăng nhập từ Redux store
   const onLogIn = useSelector(state => state.userAuth.onLogIn); // Trạng thái đăng nhập
   const cartItems = useSelector(state => state.cart.cartItems); // Các mặt hàng trong giỏ hàng
   const navigate = useNavigate(); // Đối tượng điều hướng
   const dispatch = useDispatch(); // Dispatch các action đến Redux store

   const handleClickCartIcon = () => {
      // Xử lý khi nhấp vào biểu tượng giỏ hàng
      setIsShowCartExpand(!isShowCartExpand); // Đảo trạng thái hiển thị giỏ hàng mở rộng
   };

   const handleClickCartText = () => {
      // Xử lý khi nhấp vào văn bản giỏ hàng
      navigate('/cart'); // Điều hướng đến trang giỏ hàng
   };

   const handleClickCartExpandItem = () => {
      // Xử lý khi nhấp vào một mục trong giỏ hàng mở rộng
      navigate('/cart'); // Điều hướng đến trang giỏ hàng
   };

   const handleLogoutBtn = () => {
      // Xử lý khi nhấp vào nút đăng xuất
      const userOut = {
         email: userOn.email,
         cartItems: cartItems,
      };
      if (window.confirm('Are you Sure ?')) {
         // Xác nhận người dùng muốn đăng xuất
         dispatch(userAuthSlice.actions.LOGOUT(userOut)); // Gửi action LOGOUT với thông tin người dùng cần đăng xuất
         dispatch(cartSlice.actions.UPDATE_CART_LOGOUT()); // Cập nhật giỏ hàng khi đăng xuất
         navigate('/userAuth'); // Điều hướng đến trang đăng nhập
      }
   };

   const handleClickShopBtn = () => {
      // Xử lý khi nhấp vào nút mua hàng
      dispatch(filterProductsSlice.actions.DefaultFilter()); // Áp dụng bộ lọc mặc định cho danh sách sản phẩm
      navigate('/shop'); // Điều hướng đến trang danh sách sản phẩm
   };
   return (
      <>
         <nav className="navbar">
            <ul className="navbar__page">
               <li>
                  <Link to="/">home</Link>
               </li>
               <li onClick={handleClickShopBtn}>shop</li>
            </ul>
            <div className="navbar__brand">boutique</div>

            <ul className="navbar__info">
               <li>
                  <div className=" cart__icon">
                     <FontAwesomeIcon
                        onClick={handleClickCartIcon}
                        icon={faCartShopping}
                        className="px-3 transition-all cursor-pointer text-secondary hover:text-warning hover:scale-150 hover:duration-300"
                     ></FontAwesomeIcon>
                     {cart.amount > 0 && (
                        <span className="cart__icon__state">{cart.amount}</span>
                     )}

                     {isShowCartExpand && (
                        <div className="cart__expand">
                           {cartItems.length > 0 ? (
                              cartItems.map(item => (
                                 <div
                                    onClick={handleClickCartExpandItem}
                                    className="cart__expand__container"
                                 >
                                    <div
                                       key={item.id}
                                       className=" cart__expand__items"
                                    >
                                       <img src={item.img} alt="" />
                                       <h4>{item.name}</h4>
                                       <span>x {item.quantity}</span>
                                    </div>
                                 </div>
                              ))
                           ) : (
                              <span>
                                 Chưa có sản phẩm nào trong nào giỏ hàng
                              </span>
                           )}
                        </div>
                     )}
                  </div>
                  <p onClick={handleClickCartText}>cart</p>
               </li>

               <li>
                  <FontAwesomeIcon
                     onClick={() => navigate('/userAuth')}
                     icon={faUser}
                     className="px-3 transition-all text-secondary hover:text-warning hover:scale-150 hover:duration-300"
                  />
                  {userOn.name}
               </li>

               {onLogIn && (
                  <>
                     <li onClick={handleLogoutBtn}>(Logout)</li>
                  </>
               )}
            </ul>
         </nav>
      </>
   );
}
