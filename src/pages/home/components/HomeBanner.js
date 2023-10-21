import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeBanner({ imgSrc }) {
   return (
      <>
         <div className="relative banner bg-slate-200 h-1/2">
            <img
               src={imgSrc.banner}
               className="w-full h-[450px]"
               alt="banner"
            />
            <div className="absolute -translate-y-1/2 top-1/2 left-[5%] banner__content uppercase">
               <h4 className="text-secondary">new inspiration 2020</h4>
               <h2 className="mt-5 text-brand">20% off on new season</h2>
               <button className="px-8 py-4 mt-10 uppercase bg-dark text-light">
                  <Link to="/shop">browse collection</Link>
               </button>
            </div>
         </div>
      </>
   );
}
