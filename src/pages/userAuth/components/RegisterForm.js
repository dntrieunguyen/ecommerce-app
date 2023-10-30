import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSlice } from '../../../redux/reducer/userAuthSlice';
import { registerSubmitValidate } from '../../../services/validation.js';

export default function RegisterForm({ handleShowForm }) {
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
   }); // Khai báo state 'newUser' và hàm 'setNewUser' để quản lý thông tin người dùng mới (name, email, password, phone)

   const userList = useSelector(state => state.userAuth.userList); // Lấy danh sách người dùng từ Redux store

   const dispatch = useDispatch(); // Dispatch các action đến Redux store

   const handleNameChange = e => {
      // Xử lý khi giá trị name thay đổi
      const value = e.target.value;
      setNewUser({ ...newUser, name: value }); // Cập nhật state 'newUser' với giá trị name mới

      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, name: '' }); // Xóa thông báo lỗi cho trường name nếu giá trị name không rỗng
      }
   };

   const handleEmailChange = e => {
      // Xử lý khi giá trị email thay đổi
      const value = e.target.value;
      setNewUser({ ...newUser, email: value }); // Cập nhật state 'newUser' với giá trị email mới

      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, email: '' }); // Xóa thông báo lỗi cho trường email nếu giá trị email không rỗng
      }
   };

   const handlePasswordChange = e => {
      // Xử lý khi giá trị password thay đổi
      const value = e.target.value;
      setNewUser({ ...newUser, password: value }); // Cập nhật state 'newUser' với giá trị password mới

      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, password: '' }); // Xóa thông báo lỗi cho trường password nếu giá trị password không rỗng
      }
   };

   const handlePhoneChange = e => {
      // Xử lý khi giá trị phone thay đổi
      const value = e.target.value;
      setNewUser({ ...newUser, phone: value }); // Cập nhật state 'newUser' với giá trị phone mới

      if (value.trim().length > 0) {
         setErrorMessage({ ...errorMessage, phone: '' }); // Xóa thông báo lỗi cho trường phone nếu giá trị phone không rỗng
      }
   };

   const [errorMessage, setErrorMessage] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
   }); // Khai báo state 'errorMessage' và hàm 'setErrorMessage' để quản lý thông báo lỗi

   const handleClickSignUpBtn = e => {
      // Xử lý khi nhấp vào nút đăng ký
      e.preventDefault();

      const updateUser = {
         name: newUser?.name,
         email: newUser?.email,
         password: newUser?.password,
         phone: newUser?.phone,
      }; // Tạo thông tin người dùng mới

      const { name, email, password, phone } = updateUser;

      const valid = registerSubmitValidate(
         name,
         email,
         password,
         phone,
         userList,
         setErrorMessage,
      ); // Kiểm tra tính hợp lệ của thông tin đăng ký và cập nhật thông báo lỗi

      if (valid) {
         dispatch(userAuthSlice.actions.REGISTER(updateUser)); // Gửi action REGISTER với thông tin người dùng để đăng ký
         alert('Register Success'); // Hiển thị thông báo đăng ký thành công
         setNewUser({ name: '', email: '', password: '', phone: '' }); // Xóa thông tin người dùng sau khi đăng ký thành công
         handleShowForm(); // Xử lý hiển thị form đăng ký
      }
   };

   return (
      <div className="singup__form">
         <form className="slide-in-bottom" aria-label="signup-form">
            <h2>SIGN UP</h2>
            <div className="singup__form__container">
               <label htmlFor="name">FULLNAME</label>
               <input
                  value={newUser?.name}
                  onChange={handleNameChange}
                  id="name"
                  type="name"
                  placeholder="Enter your full name..."
               />
               <span>{errorMessage?.name}</span>
            </div>
            <div className="singup__form__container">
               <label htmlFor="email">EMAIL</label>
               <input
                  value={newUser?.email}
                  onChange={handleEmailChange}
                  id="email"
                  type="email"
                  placeholder="Enter your email address..."
               />
               <span>{errorMessage?.email}</span>
            </div>
            <div className="singup__form__container">
               <label htmlFor="password">PASSWORD</label>
               <input
                  value={newUser?.password}
                  onChange={handlePasswordChange}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
               />
               <span>{errorMessage?.password}</span>
            </div>
            <div className="singup__form__container">
               <label htmlFor="email">PHONE</label>
               <input
                  value={newUser?.phone}
                  onChange={handlePhoneChange}
                  id="phone"
                  type="phone"
                  placeholder="Enter your phone..."
               />
               <span>{errorMessage?.phone}</span>
            </div>

            <button
               onClick={handleClickSignUpBtn}
               type="submit"
               className="Btn__Signup"
            >
               Sign Up
            </button>
            <div className="form__text">
               <p>Login?</p>
               <p onClick={handleShowForm}>Click</p>
            </div>
         </form>
      </div>
   );
}
