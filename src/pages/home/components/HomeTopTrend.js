import React from 'react';
import Product from '../../../components/product/Product';
import { useSelector } from 'react-redux';
import { productListSelector } from '../../../redux/selector';

export default function HomeTopTrend() {
   const productsList = useSelector(productListSelector);

   return (
      <>
         <div className="my-10 toptrend">
            <div className="uppercase toptrend__title">
               <h4 className=" text-secondary">make the hard way</h4>
               <h2 className="text-lead">top trending products</h2>
            </div>
            <div className="grid grid-cols-4 gap-5 toptrend__content">
               {productsList &&
                  productsList.map(product => (
                     <Product
                        key={product.id}
                        id={product._id.$oid}
                        img1={product.img1}
                        name={product.name}
                        price={product.price}
                     ></Product>
                  ))}
            </div>
         </div>
      </>
   );
}
