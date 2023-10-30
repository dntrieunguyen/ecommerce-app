import React from 'react';

export default function DetailDesc({ product }) {
   console.log(product?.long_desc);
   return (
      <>
         <div className="detail__desc">
            <div className="detail__desc__title">
               <button>description</button>
               <h2>product description</h2>
            </div>

            <div className="detail__desc__content ">
               <p>{product?.long_desc}</p>
            </div>
         </div>
      </>
   );
}
