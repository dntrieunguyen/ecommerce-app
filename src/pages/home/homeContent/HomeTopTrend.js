import React from 'react';
import Product from '../../../components/product/Product';

export default function HomeTopTrend() {
   return (
      <>
         <div className="my-10 toptrend">
            <div className="uppercase toptrend__title">
               <h4 className=" text-secondary">make the hard way</h4>
               <h2 className="text-lead">top trending products</h2>
            </div>
            <div className="grid grid-cols-4 gap-5 toptrend__content">
               <Product></Product>
               <Product></Product>
               <Product></Product>
               <Product></Product>
               <Product></Product>
               <Product></Product>
               <Product></Product>
               <Product></Product>
               <Product></Product>
            </div>
         </div>
      </>
   );
}
