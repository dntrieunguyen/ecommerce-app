import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CartPage from './pages/cart/CartPage';
import DetailPage from './pages/detail/DetailPage';
import CheckOutPage from './pages/checkOut/CheckOutPage';
import LogInPage from './pages/logIn/LogInPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/checkOut" element={<CheckOutPage />} />
            <Route path="/logIn" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
