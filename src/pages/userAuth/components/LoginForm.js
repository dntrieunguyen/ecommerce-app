import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSlice } from '../../../redux/reducer/userAuthSlice';
import { loginSubmitValidate } from '../../../services/validation';
import { cartSlice } from '../../../redux/reducer/cartSlice';

export default function LoginForm({ handleShowForm }) {
   const [user, setUser] = useState({
      email: '',
      password: '',
   }); // Khai báo state 'user' và hàm 'setUser' để quản lý thông tin người dùng (email, password)

   const [errorMessage, setErrorMessage] = useState({
      email: '',
      password: '',
   }); // Khai báo state 'errorMessage' và hàm 'setErrorMessage' để quản lý thông báo lỗi

   const userList = useSelector(state => state.userAuth.userList); // Lấy danh sách người dùng từ Redux store
   const userCart = useSelector(state => state.userAuth.userCart); // Lấy giỏ hàng của người dùng từ Redux store

   const dispatch = useDispatch(); // Dispatch các action đến Redux store

   const handleUserEmailChange = e => {
      // Xử lý khi giá trị email thay đổi
      const value = e.target.value;
      setUser(prev => ({ ...prev, email: value })); // Cập nhật state 'user' với giá trị email mới

      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, email: '' }); // Xóa thông báo lỗi cho trường email nếu giá trị email không rỗng
      }
   };

   const handleUserPasswordChange = e => {
      // Xử lý khi giá trị password thay đổi
      const value = e.target.value;
      setUser(prev => ({ ...prev, password: value })); // Cập nhật state 'user' với giá trị password mới

      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, password: '' }); // Xóa thông báo lỗi cho trường password nếu giá trị password không rỗng
      }
   };

   const handleSignInBtn = e => {
      // Xử lý khi nhấp vào nút đăng nhập
      e.preventDefault();

      const newUser = {
         email: user.email,
         password: user.password,
      }; // Tạo thông tin người dùng mới

      const { email, password } = newUser;

      const isValid = loginSubmitValidate(
         email,
         password,
         userList,
         setErrorMessage,
      ); // Kiểm tra tính hợp lệ của thông tin đăng nhập và cập nhật thông báo lỗi

      if (isValid === false) {
         setUser({ ...user, password: '' }); // Xóa giá trị password nếu thông tin đăng nhập không hợp lệ
      }

      const userCartChange = userCart;

      if (isValid) {
         if (userCartChange.length > 0) {
            const userCartFilter = userCartChange.find(
               item => item.email === email,
            ); // Lấy giỏ hàng của người dùng từ Redux store dựa trên email

            dispatch(
               cartSlice.actions.UPDATE_CART_LOGIN(userCartFilter?.cartItems),
            ); // Gửi action UPDATE_CART_LOGIN với danh sách sản phẩm trong giỏ hàng của người dùng để cập nhật giỏ hàng trong Redux store
         }

         dispatch(userAuthSlice.actions.LOGIN(newUser)); // Gửi action LOGIN với thông tin người dùng để đăng nhập
         alert('Login Success !!!'); // Hiển thị thông báo đăng nhập thành công

         setUser({
            email: '',
            password: '',
         }); // Xóa thông tin người dùng sau khi đăng nhập thành công
      }
   };

   return (
      <div className="login__form ">
         <form className='slide-in-bottom' autoComplete="off" aria-label="login-form">
            <h2>SIGN IN</h2>

            <div className="login__form__container">
               <label htmlFor="email">Email</label>
               <input
                  id="email"
                  onChange={handleUserEmailChange}
                  value={user?.email}
                  type="email"
                  placeholder="Enter your name address ..."
               />
               <span>{errorMessage.email}</span>
            </div>
            <div className="login__form__container">
               <label htmlFor="password">PASSWORD</label>
               <input
                  onChange={handleUserPasswordChange}
                  value={user.password}
                  id="password"
                  type="password"
                  placeholder="Enter your password ..."
               />
               <span>{errorMessage.password}</span>
            </div>

            <button
               onClick={handleSignInBtn}
               type="submit"
               className="Btn__Login "
            >
               Sign in
            </button>
            <div className="form__text">
               <p>Create an account?</p>
               <p onClick={handleShowForm}>Sign Up</p>
            </div>
         </form>
      </div>
   );
}
