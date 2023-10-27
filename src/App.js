import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CartPage from './pages/cart/CartPage';
import DetailPage from './pages/detail/DetailPage';
import CheckOutPage from './pages/checkOut/CheckOutPage';
import UserAuth from './pages/userAuth/UserAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from './redux/reducer/productSlice';
import ChatComponent from './components/chat/ChatComponent';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProduct());
   }, []);

   // handle state of loading data
   // + pending
   // + fulfilled
   // + error
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/shop" element={<ShopPage />} />
               <Route path="/cart" element={<CartPage />} />
               <Route path="/detail" element={<DetailPage />} />
               <Route path="/checkout" element={<CheckOutPage />} />
               <Route path="/userAuth" element={<UserAuth />} />
               {/* <Route path="/register" element={<RegisterPage />} /> */}
            </Routes>
            <ChatComponent></ChatComponent>
         </BrowserRouter>
      </>
   );
}

export default App;
