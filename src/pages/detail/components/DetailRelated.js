import React from 'react';
import Product from '../../../components/product/Product';
import { useSelector } from 'react-redux';
import { productListSelector } from '../../../redux/selector';
import { useNavigate } from 'react-router-dom';

export default function DetailRelated({ category }) {
   const product = useSelector(productListSelector);

   const navigate = useNavigate();

   const handleClickProduct = id => {
      //handle
      navigate(`/detail/${id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   return (
      <>
         <div className="detail__related">
            <h2>related products</h2>

            <div className="detail__related__content">
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
