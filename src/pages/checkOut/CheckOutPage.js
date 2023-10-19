import React from 'react';
import './CheckOutPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
export default function CheckOutPage() {
   return (
      <>
         <Navbar></Navbar>
         <div className="checkout">
            <div className="p-20 bg-slate-100 checkout__banner">
               <div className="checkout__contaniner w-[80%] mx-auto flex justify-between items-center">
                  <h2 className="text-title font-[500]">CHECKOUT</h2>
                  <div className="checkout__breadcrumbs">
                     <ol className="flex">
                        <li className="cursor-pointer hover:text-warning font-[500]">
                           HOME
                        </li>
                        <span className="px-3">/</span>
                        <li className="cursor-pointer hover:text-warning font-[500]">
                           CART
                        </li>
                        <span className="px-3">/</span>
                        <li className="cursor-pointer hover:text-warning text-secondary">
                           CHECKOUT
                        </li>
                     </ol>
                  </div>
               </div>
            </div>
            <div className="checkout__content w-[80%] mx-auto my-10">
               <h2 className="font-[500] text-title my-10">BILLING DETAILS</h2>
               <div className="grid grid-cols-3 gap-10 checkout__detail">
                  <div className="col-span-2 checkout__form">
                     <form action="">
                        <div className="flex flex-col items-start mb-5 gap-y-3">
                           <label
                              htmlFor="name"
                              className="cursor-pointer text-secondary "
                           >
                              FULL NAME:
                           </label>
                           <input
                              id="name"
                              type="name"
                              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                              placeholder="Enter your full name..."
                           />
                        </div>
                        <div className="flex flex-col items-start mb-5 gap-y-3">
                           <label
                              htmlFor="email"
                              className="cursor-pointer text-secondary "
                           >
                              EMAIL:
                           </label>
                           <input
                              id="email"
                              type="email"
                              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                              placeholder="Enter your email address..."
                           />
                        </div>
                        <div className="flex flex-col items-start mb-5 gap-y-3">
                           <label
                              htmlFor="phone"
                              className="cursor-pointer text-secondary "
                           >
                              PHONE NUMBER:
                           </label>
                           <input
                              id="phone"
                              type="phone"
                              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                              placeholder="Enter your phone..."
                           />
                        </div>
                        <div className="flex flex-col items-start mb-5 gap-y-3">
                           <label
                              htmlFor="address"
                              className="cursor-pointer text-secondary "
                           >
                              ADDRESS:
                           </label>
                           <input
                              id="address"
                              type="address"
                              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                              placeholder="Enter your address..."
                           />
                        </div>
                        <button> Place order</button>
                     </form>
                  </div>
                  <div className="col-start-3 p-10 checkout__total bg-slate-100 h-fit">
                     <h2 className="text-title font-[500]">YOUR ORDER</h2>

                     <div className="flex justify-between my-5 border-b checkout__items">
                        <h4 className="font-[500]">
                           Lorem ipsum dolor sit amet.
                        </h4>
                        <p className="px-3 text-secondary">
                           10.999.999 <span className="">x 1</span>
                        </p>
                     </div>
                     <div className="flex justify-between my-5 checkout__items__total">
                        <h4 className="font-[500]">TOTAL</h4>
                        <p className="px-3 text-secondary">10.999.999 VND</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
