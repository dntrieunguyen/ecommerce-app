import React from 'react';
import Product from '../../../components/product/Product';

export default function DetailRelated() {
   return (
      <>
         <div className="my-20 detail__related">
            <h2 className="uppercase text-lead">related products</h2>

            <div className="grid grid-cols-4 my-5 detail__related__content">
               <Product></Product>
            </div>
         </div>
      </>
   );
}
