import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomeCategory({ imgSrc }) {
   return (
      <>
         <div className="category">
            <div className="mt-10 text-center uppercase category__title">
               <h4 className="text-secondary">carefully created collections</h4>
               <h2 className="text-lead">browse our categories</h2>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-10 category__img--big">
               {imgSrc.category.slice(0, 2).map((item, index) => (
                  <NavLink to="/shop">
                     <img
                        key={index}
                        src={item}
                        className=" h-[450px/3] w-full hover:opacity-50 hover:duration-500 cursor-pointer"
                        alt={`product_${index}`}
                     />
                  </NavLink>
               ))}
            </div>
            <div className="grid grid-cols-3 gap-10 mt-10 category__img--small">
               {imgSrc.category.slice(2, 5).map((item, index) => (
                  <NavLink to="/shop">
                     <img
                        key={index}
                        src={item}
                        className=" h-[450px/3] w-full hover:opacity-50 hover:duration-500 cursor-pointer"
                        alt={`product_${index}`}
                     />
                  </NavLink>
               ))}
            </div>
         </div>
      </>
   );
}
