import React from 'react';
import './CartPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CartItem from './components/CartItem';
import CartTotal from './components/CartTotal';
export default function CartPage() {
   return (
      <>
         <Navbar></Navbar>
         <div className="cart">
            <div className="p-20 bg-slate-100 cart__banner">
               <div className="cart__contaniner w-[80%] mx-auto flex justify-between items-center">
                  <h2 className="text-title font-[500]">CART</h2>
                  <h2 className="cursor-pointer hover:text-warning text-secondary font-[500]">
                     CART
                  </h2>
               </div>
            </div>
            <div className="cart__content w-[80%] mx-auto my-10">
               <h2 className="font-[500] text-title my-10">SHOPPING CART</h2>
               <div className="grid grid-cols-3 gap-10 cart__detail">
                  <div class="col-span-2 ">
                     <table class="w-full text-left text-gray-500">
                        <thead class=" text-gray-700 uppercase bg-gray-50 text-center">
                           <tr>
                              <th scope="col" class="px-6 py-3">
                                 IMAGE
                              </th>
                              <th scope="col" class="px-6 py-3">
                                 PRODUCT
                              </th>
                              <th scope="col" class="px-6 py-3">
                                 PRICE
                              </th>
                              <th scope="col" class="px-6 py-3">
                                 QUANTITY
                              </th>
                              <th scope="col" class="px-6 py-3">
                                 Total
                              </th>
                              <th scope="col" class="px-6 py-3">
                                 Remove
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <CartItem></CartItem>
                           <CartItem></CartItem>
                           <CartItem></CartItem>
                           <CartItem></CartItem>
                        </tbody>
                        <tfoot>
                           <tr className="h-[50px] bg-slate-100 ">
                              <td colSpan={3} className="h-full p-10 ">
                                 <span className="cursor-pointer hover:text-warning hover:font-medium">
                                    <FontAwesomeIcon icon={faArrowLeft} />{' '}
                                    Continue shopping
                                 </span>
                              </td>
                              <td
                                 colSpan={3}
                                 className="h-full p-10 text-right"
                              >
                                 <span className="p-3 border cursor-pointer border-dark hover:bg-black hover:text-light hover:duration-300 hover:font-medium">
                                    Proceed to check out{' '}
                                    <FontAwesomeIcon icon={faArrowRight} />
                                 </span>
                              </td>
                           </tr>
                        </tfoot>
                     </table>
                  </div>

                  <CartTotal></CartTotal>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
