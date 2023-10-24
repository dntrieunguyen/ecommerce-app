import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProductsSlice } from '../../../redux/reducer/filterProductsSlice';

export default function ShopSearch() {
   const [searchInput, setSearchInput] = useState('');

   const dispatch = useDispatch();

   const handleSearchInputOnChange = e => {
      const newInput = e.target.value;
      setSearchInput(newInput);
      dispatch(filterProductsSlice.actions.searchInputChange(newInput));
   };
   return (
      <>
         <div className="flex items-center justify-between shop__search">
            <input
               className="p-3 border focus-visible:outline-none w-[400px]"
               type="text"
               placeholder="Enter Search Here!"
               value={searchInput}
               onChange={handleSearchInputOnChange}
            />
            <div className="shop__search__select">
               <select
                  id="currency"
                  name="currency"
                  className="h-full px-5 py-1 border focus-within:outline-none"
               >
                  <option>Default Sort</option>
               </select>
            </div>
         </div>
      </>
   );
}
