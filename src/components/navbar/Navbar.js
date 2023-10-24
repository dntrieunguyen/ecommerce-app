import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
   const cart = useSelector(state => state.cart.cart);
   console.log(cart);
   return (
      <>
         <nav className="flex justify-between p-5 italic navbar container mx-auto w-[80%]">
            <ul className="flex items-center w-1/4 gap-3 navbar__page">
               <li className="capitalize cursor-pointer text-warning">
                  <Link to="/">home</Link>
               </li>
               <li className="capitalize cursor-pointer">
                  <Link to="/shop">shop</Link>
               </li>
            </ul>
            <div className="w-1/2 text-center uppercase navbar__brand text-title">
               boutique
            </div>

            <ul className="flex items-center justify-end w-1/4 gap-3 navbar__info">
               <Link to="/cart">
                  <li className="flex capitalize cursor-pointer">
                     <div className="relative cart__icon">
                        <FontAwesomeIcon
                           icon={faCartShopping}
                           className="px-3 text-secondary hover:text-warning"
                        ></FontAwesomeIcon>
                        {cart.amount > 0 && (
                           <span className="absolute top-0 -translate-y-1/2 right-0 text-light text-center text-sm rounded-full cart__icon__state w-[15px] p-1 h-[15px]  bg-warning">
                              {cart.amount}
                           </span>
                        )}
                     </div>
                     <p>cart</p>
                  </li>
               </Link>
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
