import React from 'react';
import './ShopPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import ShopCategory from './shopContent/ShopCategory';
import ShopSearch from './shopContent/ShopSearch';
import ShopPagination from './shopContent/ShopPagination';
export default function ShopPage() {
   const shopCategory = [
      {
         categroy: 'Iphone & Imac',
         item: ['Iphone', 'Ipad', 'Macbook'],
      },
      {
         categroy: 'wireless',
         item: ['airpod', 'watch'],
      },
      {
         categroy: 'other',
         item: ['mouse', 'keyboard', 'other'],
      },
   ];
   return (
      <>
         <Navbar></Navbar>
         <section className="shop__container w-[80%] mx-auto">
            <div className="p-20 bg-orange-100 text-title font-[500] shop__banner">
               <h2>SHOP</h2>
            </div>
            <div className="grid grid-cols-4 gap-10 my-10 shop__content">
               <ShopCategory shopCategory={shopCategory}></ShopCategory>
               <div className="col-start-2 col-end-5 shop__display">
                  <ShopSearch></ShopSearch>
                  <div className="grid grid-cols-3 gap-5 my-10 shop__display__item">
                     <Product></Product>
                  </div>
                  <div className="flex justify-end shop__pagination">
                     <ShopPagination></ShopPagination>
                  </div>
               </div>
            </div>
         </section>
         <Footer></Footer>
      </>
   );
}
