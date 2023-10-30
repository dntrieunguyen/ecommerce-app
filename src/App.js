import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CartPage from './pages/cart/CartPage';
import DetailPage from './pages/detail/DetailPage';
import CheckOutPage from './pages/checkOut/CheckOutPage';
import UserAuth from './pages/userAuth/UserAuth';
import ChatComponent from './components/chat/ChatComponent';

function App() {
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
               <Route path="/detail/:id" element={<DetailPage />} />
               <Route path="/checkout" element={<CheckOutPage />} />
               <Route path="/userAuth" element={<UserAuth />} />
            </Routes>
            <ChatComponent></ChatComponent>
         </BrowserRouter>
      </>
   );
}

export default App;
