import React from 'react';
import './DetailPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import DetailInfo from './components/DetailInfo';
import DetailRelated from './components/DetailRelated';
import DetailDesc from './components/DetailDesc';
import { useSelector } from 'react-redux';
import { detailProducts } from '../../redux/selector';

export default function DetailPage() {
   const product = useSelector(detailProducts);

   return (
      <>
         <Navbar></Navbar>
         <div className="detail w-[80%] mx-auto">
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
