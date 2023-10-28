import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeBanner({ imgSrc }) {
   return (
      <>
         <div className="banner">
            <img src={imgSrc.banner} alt="banner" />
            <div className="banner__content">
               <h4>new inspiration 2020</h4>
               <h2>20% off on new season</h2>
               <button>
                  <Link to="/shop">browse collection</Link>
               </button>
            </div>
         </div>
      </>
   );
}
