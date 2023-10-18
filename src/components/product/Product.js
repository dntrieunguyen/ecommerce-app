import React from 'react';

export default function Product() {
   return (
      <>
         <div className="toptrend__item">
            <img
               src={require('../../assets/img/product_1.png')}
               className="h-[300px] hover:opacity-50 hover:duration-500"
               alt=""
            />
            <div className="text-center toptrend__item_content">
               <h4 className="font-[600]">Name of product</h4>
               {/* number.toLocaleString('vi-VN')*/}
               <p className="text-secondary">10.999.999</p>
            </div>
         </div>
      </>
   );
}
