import React from 'react';
import './DetailPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import DetailInfo from './components/DetailInfo';
import DetailRelated from './components/DetailRelated';
import DetailDesc from './components/DetailDesc';
import { useSelector } from 'react-redux';
import { productListSelector } from '../../redux/selector';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
   const param = useParams();
   const productList = useSelector(productListSelector);

   const product = productList.find(product => product._id.$oid === param.id);

   return (
      <>
         <Navbar></Navbar>
         <div className="detail">
            <DetailInfo product={product}></DetailInfo>
            <DetailDesc product={product}></DetailDesc>
            {product && (
               <DetailRelated category={product.category}></DetailRelated>
            )}
         </div>
         <Footer></Footer>
      </>
   );
}
