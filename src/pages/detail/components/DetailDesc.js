import React from 'react';

export default function DetailDesc({ product }) {
   return (
      <>
         <div className="my-10 detail__desc">
            <div className="uppercase detail__desc__title">
               <button>description</button>
               <h2 className="my-5 text-lead">product description</h2>
            </div>

            <div className="detail__desc__content text-secondary">
               <p className="w-full">{product?.long_desc}</p>
            </div>
         </div>
      </>
   );
}
