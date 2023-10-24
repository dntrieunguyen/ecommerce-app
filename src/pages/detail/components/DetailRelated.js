import React from 'react';
import Product from '../../../components/product/Product';
import { useSelector } from 'react-redux';
import { productListSelector } from '../../../redux/selector';

export default function DetailRelated({ category }) {
   const product = useSelector(productListSelector);
   const handleClickProduct = () => {
      //handle
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   return (
      <>
         <div className="my-20 detail__related">
            <h2 className="uppercase text-lead">related products</h2>

            <div className="grid grid-cols-4 gap-10 my-5 detail__related__content">
               {product &&
                  product
                     .filter(item => item.category === category)
                     .map(item => (
                        <Product
                           key={item._id.$oid}
                           id={item._id.$oid}
                           img1={item.img1}
                           name={item.name}
                           price={item.price}
                           handleClickProduct={handleClickProduct}
                        ></Product>
                     ))}
            </div>
         </div>
      </>
   );
}
