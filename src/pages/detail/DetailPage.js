import React from 'react';
import './DetailPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import DetailInfo from './components/DetailInfo';
import DetailRelated from './components/DetailRelated';
import DetailDesc from './components/DetailDesc';
export default function DetailPage() {
   return (
      <>
         <Navbar></Navbar>
         <div className="detail w-[80%] mx-auto">
            <DetailInfo></DetailInfo>
            <DetailDesc></DetailDesc>
            <DetailRelated></DetailRelated>
         </div>
         <Footer></Footer>
      </>
   );
}
