import React from 'react';

export default function RegisterForm({ handleShowForm }) {
   return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 ">
         <form
            className="w-[400px] slide-in-bottom p-10 bg-white rounded-lg shadow "
            aria-label="signup-form"
         >
            <h2 className="mb-10 text-title font-[500] text-center">SIGN UP</h2>
            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label
                  htmlFor="name"
                  className="text-sm font-medium cursor-pointer "
               >
                  FULLNAME
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
                  className="text-sm font-medium cursor-pointer "
               >
                  EMAIL
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
                  htmlFor="password"
                  className="text-sm font-medium cursor-pointer "
               >
                  PASSWORD
               </label>
               <input
                  id="password"
                  type="password"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your password"
               />
            </div>
            <div className="flex flex-col items-start mb-5 gap-y-3">
               <label
                  htmlFor="email"
                  className="text-sm font-medium cursor-pointer "
               >
                  PHONE
               </label>
               <input
                  id="phone"
                  type="phone"
                  className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
                  placeholder="Enter your phone..."
               />
            </div>

            <button
               type="submit"
               className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
            >
               Sign Up
            </button>
            <div className="flex items-center justify-center my-5 text-slate-400">
               <p>Login?</p>
               <p
                  className="text-blue-500 underline cursor-pointer ps-3"
                  onClick={handleShowForm}
               >
                  Click
               </p>
            </div>
         </form>
      </div>
   );
}
