import React, { useCallback, useEffect } from 'react';
import './HomePage.scss';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import HomeBanner from './components/HomeBanner.js';
import HomeCategory from './components/HomeCategory.js';
import HomeTopTrend from './components/HomeTopTrend.js';
import HomeService from './components/HomeService.js';

export default function HomePage() {
   const imgSrc = {
      banner: require('../../assets/img/banner1.jpg'),
      category: [
         require('../../assets/img/product_1.png'),
         require('../../assets/img/product_2.png'),
         require('../../assets/img/product_3.png'),
         require('../../assets/img/product_4.png'),
         require('../../assets/img/product_5.png'),
      ],
   };

   return (
      <>
         <Navbar></Navbar>
         <section className="w-[80%] container mx-auto">
            <HomeBanner imgSrc={imgSrc}></HomeBanner>
            <HomeCategory imgSrc={imgSrc}></HomeCategory>
            <HomeTopTrend></HomeTopTrend>
            <HomeService></HomeService>

            <div className="flex justify-between my-20 subcribe">
               <div className="subcribe__title">
                  <h2 className="uppercase text-lead font-[500]">
                     let's be friend !
                  </h2>
                  <h4 className=" text-secondary">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h4>
               </div>
               <form className="subscribe__action">
                  <input
                     className="w-[400px] h-full px-5 border border-slate-200 focus-visible:outline-none"
                     type="text"
                     placeholder="Enter your email address"
                  />
                  <button className="h-full px-8 py-4 uppercase bg-dark text-light">
                     subcribe
                  </button>
               </form>
            </div>
         </section>
         <Footer></Footer>
      </>
   );
}
