import React, { useState } from 'react';

export default function CheckOutForm() {
   const [checkOutUser, setCheckOutUser] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
   }); // Khai báo state 'checkOutUser' và hàm 'setCheckOutUser' để quản lý thông tin người dùng khi thanh toán

   const checkOutForm = [
      {
         name: 'FULL NAME',
         placeholder: 'Enter your full name...',
         type: 'name',
      },
      {
         name: 'EMAIL',
         placeholder: 'Enter your email address...',
         type: 'email',
      },
      {
         name: 'PHONE NUMBER',
         placeholder: 'Enter your phone...',
         type: 'phone',
      },
      {
         name: 'ADDRESS',
         placeholder: 'Enter your address...',
         type: 'address',
      },
   ]; // Mảng 'checkOutForm' chứa thông tin về các trường nhập trong form thanh toán

   const handleChange = (e, item) => {
      // Xử lý khi giá trị nhập vào các trường thay đổi
      setCheckOutUser({
         ...checkOutUser,
         [item.type]: e.target.value,
      }); // Cập nhật state 'checkOutUser' với thông tin người dùng mới, sử dụng cú pháp spread và dynamic key để cập nhật giá trị cho trường tương ứng
   };

   const handleSubmit = e => {
      e.preventDefault();
      // Xử lý khi nhấp vào nút gửi form

      setCheckOutUser({
         name: '',
         email: '',
         phone: '',
         address: '',
      }); // Xóa thông tin người dùng sau khi gửi form thành công
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            {checkOutForm.map((item, index) => (
               <div key={index}>
                  <label htmlFor={item.type}>{item.name}:</label>
                  <input
                     id={item.type}
                     type={item.type}
                     placeholder={item.placeholder}
                     value={checkOutUser[item.type]}
                     onChange={e => handleChange(e, item)}
                  />
               </div>
            ))}

            <button type="submit">Place order</button>
         </form>
      </>
   );
}
