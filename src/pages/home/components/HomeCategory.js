import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function HomeCategory({ imgSrc }) {
   const navigate = useNavigate();

   const handleClick = () => {
      //handle
      navigate('/shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   return (
      <>
         <div className="category">
            <div className="category__title">
               <h4>carefully created collections</h4>
               <h2>browse our categories</h2>
            </div>
            <div className="category__img--big">
               {imgSrc.category.slice(0, 2).map((item, index) => (
                  <img
                     onClick={handleClick}
                     key={`productBig_${index}`}
                     src={item}
                     alt={`product_${index}`}
                  />
               ))}
            </div>
            <div className="category__img--small">
               {imgSrc.category.slice(2, 5).map((item, index) => (
                  <NavLink key={`productSmall_${index}`} to="/shop">
                     <img
                        onClick={handleClick}
                        src={item}
                        alt={`product_${index}`}
                     />
                  </NavLink>
               ))}
            </div>
         </div>
      </>
   );
}
