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
               <div
                  key={index}
                  className="flex flex-col items-start mb-5 gap-y-3"
               >
                  <label
                     htmlFor={item.type}
                     className="cursor-pointer text-secondary "
                  >
                     {item.name}:
                  </label>
                  <input
                     id={item.type}
                     type={item.type}
                     className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
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
