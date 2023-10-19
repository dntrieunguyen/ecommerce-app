import React from 'react';

export default function CheckOutForm() {
   return (
      <>
         <form action="">
            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label htmlFor="name" className="cursor-pointer text-secondary ">
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
      </>
   );
}
