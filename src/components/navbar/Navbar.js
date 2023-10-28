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
   const cart = useSelector(state => state.cart.cart);
   const [isShowCartExpand, setIsShowCartExpand] = useState(false);

   const userOn = useSelector(state => state.userAuth.userOn);

   const onLogIn = useSelector(state => state.userAuth.onLogIn);

   const cartItems = useSelector(state => state.cart.cartItems);

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleClickCartIcon = () => {
      //handle
      setIsShowCartExpand(!isShowCartExpand);
   };

   const handleClickCartText = () => {
      navigate('/cart');
   };

   const handleClickCartExpandItem = () => {
      navigate('/cart');
   };

   const handleLogoutBtn = () => {
      const userOut = {
         email: userOn.email,
         cartItems: cartItems,
      };

      if (window.confirm('Are you Sure ?')) {
         dispatch(userAuthSlice.actions.LOGOUT(userOut));
         dispatch(cartSlice.actions.UPDATE_CART_LOGOUT());
         navigate('/userAuth');
      }
   };

   const handleClickShopBtn = () => {
      dispatch(filterProductsSlice.actions.DefaultFilter());
      navigate('/shop');
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
