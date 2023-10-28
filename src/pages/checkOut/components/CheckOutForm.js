import React, { useState } from 'react';

export default function CheckOutForm() {
   const [checkOutUser, setCheckOutUser] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
   });
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
   ];

   const handleChange = (e, item) => {
      setCheckOutUser({
         ...checkOutUser,
         [item.type]: e.target.value,
      });
   };

   const handleSubmit = e => {
      e.preventDefault();

      console.log(checkOutUser); // Log the result of checkOutUser
      setCheckOutUser({
         name: '',
         email: '',
         phone: '',
         address: '',
      });
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
