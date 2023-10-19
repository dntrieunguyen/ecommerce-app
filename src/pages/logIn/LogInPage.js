import React from 'react';
import './LogInPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
export default function LogInPage() {
   return (
      <>
         <Navbar></Navbar>
         <div className="relative bg-center bg-cover register">
            <form
               autoComplete="off"
               className="w-full max-w-[400px] p-10 bg-white rounded-lg shadow absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
               aria-label="login-form"
            >
               <h2 className="mb-10 text-title font-[500] text-center">
                  SIGN IN
               </h2>

               <div className="flex flex-col items-start mb-5 gap-y-3">
                  <label
                     htmlFor="email"
                     className="text-sm font-[500] cursor-pointer "
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
                     className="text-sm font-[500] cursor-pointer "
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

               <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
               >
                  Sign in
               </button>
               <div className="flex items-center justify-center my-5 text-slate-400">
                  <p>Create an account?</p>
                  <p className="text-blue-500 underline cursor-pointer ps-3">
                     Sign Up
                  </p>
               </div>
            </form>
         </div>
         <Footer></Footer>
      </>
   );
}
