import React from 'react';
import './ShopPage.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import ShopCategory from './components/ShopCategory';
import ShopSearch from './components/ShopSearch';
import ShopPagination from './components/ShopPagination';
import { useSelector } from 'react-redux';
import { remainingProduct } from '../../redux/selector';
import { useNavigate } from 'react-router-dom';

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
   const productsList = useSelector(remainingProduct);

   const navigate = useNavigate();

   const handleClickProduct = id => {
      //handle

      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(`/detail/${id}`);

      // navigate(`/detail/${detailProduct.productID}`);
   };

   return (
      <>
         <Navbar></Navbar>
         <section className="shop__container ">
            <div className="shop__banner">
               <h2>SHOP</h2>
            </div>
            <div className="shop__content">
               <ShopCategory shopCategory={shopCategory}></ShopCategory>
               <div className="shop__display">
                  <ShopSearch></ShopSearch>
                  <div className="shop__display__item">
                     {productsList &&
                        productsList.map(product => (
                           <Product
                              key={product._id.$oid}
                              id={product._id.$oid}
                              img1={product.img1}
                              name={product.name}
                              price={product.price}
                              handleClickProduct={handleClickProduct}
                           ></Product>
                        ))}
                  </div>

                  <ShopPagination></ShopPagination>
               </div>
            </div>
         </section>
         <Footer></Footer>
      </>
   );
}
