import React from 'react';

export default function ShopSearch() {
   return (
      <>
         <div className="flex items-center justify-between shop__search">
            <input
               className="p-3 border focus-visible:outline-none w-[400px]"
               type="text"
               placeholder="Enter Search Here!"
            />
            <div className="shop__search__select">
               <select
                  id="currency"
                  name="currency"
                  className="h-full px-5 py-1 border focus-within:outline-none"
               >
                  <option>option</option>
                  <option>option</option>
                  <option>option</option>
               </select>
            </div>
         </div>
      </>
   );
}
