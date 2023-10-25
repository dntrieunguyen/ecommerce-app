import React, { useState } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
   const cart = useSelector(state => state.cart.cart);
   const [isShowCartExpand, setIsShowCartExpand] = useState(false);

   const cartItems = useSelector(state => state.cart.cartItems);

   const navigate = useNavigate();

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

   return (
      <>
         <nav className="flex justify-between p-5 italic navbar container mx-auto w-[80%]">
            <ul className="flex items-center w-1/4 gap-3 navbar__page">
               <li className="capitalize cursor-pointer text-warning">
                  <Link to="/">home</Link>
               </li>
               <li className="capitalize cursor-pointer hover:text-warning">
                  <Link to="/shop">shop</Link>
               </li>
            </ul>
            <div className="w-1/2 text-center uppercase navbar__brand text-title">
               boutique
            </div>

            <ul className="flex items-center justify-end w-1/4 gap-3 navbar__info">
               <li className="flex capitalize ">
                  <div className="relative cart__icon">
                     <FontAwesomeIcon
                        onClick={handleClickCartIcon}
                        icon={faCartShopping}
                        className="px-3 cursor-pointer text-secondary hover:text-warning hover:scale-150 hover:duration-300"
                     ></FontAwesomeIcon>
                     {cart.amount > 0 && (
                        <span className="absolute top-0 -translate-y-1/2 right-0 text-light text-center text-sm rounded-full cart__icon__state w-[15px] p-1 h-[15px]  bg-warning">
                           {cart.amount}
                        </span>
                     )}

                     {isShowCartExpand && (
                        <div className="shadow-2xl absolute cart__expand w-[300px] bg-light p-5 z-10 my-3 translate-x-[150px] right-0">
                           {cartItems.length > 0 ? (
                              cartItems.map(item => (
                                 <div
                                    onClick={handleClickCartExpandItem}
                                    className="py-3 border-b-2 cursor-pointer hover:shadow-xl"
                                 >
                                    <div
                                       key={item.id}
                                       className="grid grid-cols-4 gap-5 mb-5 cart__expand__items"
                                    >
                                       <img
                                          className="w-[90px] h-[90px]"
                                          src={item.img}
                                          alt=""
                                       />
                                       <h4 className="p-3 font-[600] col-span-2 flex items-center justify-center">
                                          {item.name}
                                       </h4>
                                       <span className="flex items-center justify-center col-start-4 p-3">
                                          x {item.quantity}
                                       </span>
                                    </div>
                                 </div>
                              ))
                           ) : (
                              <span className="">
                                 Chưa có sản phẩm nào trong nào giỏ hàng
                              </span>
                           )}
                        </div>
                     )}
                  </div>
                  <p
                     className="cursor-pointer hover:text-warning"
                     onClick={handleClickCartText}
                  >
                     cart
                  </p>
               </li>

               <Link to="/userAuth">
                  <li className="capitalize cursor-pointer">
                     <FontAwesomeIcon
                        icon={faUser}
                        className="px-3 text-secondary hover:text-warning"
                     />
                     user
                  </li>
               </Link>
               {/* <li className="capitalize cursor-pointer">(LoginStatus)</li> */}
            </ul>
         </nav>
      </>
   );
}
