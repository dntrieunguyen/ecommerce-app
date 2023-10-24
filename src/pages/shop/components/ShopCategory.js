import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProductsSlice } from '../../../redux/reducer/filterProductsSlice';

export default function ShopCategory({ shopCategory }) {
   const [category, setCategory] = useState('all');

   const dispatch = useDispatch();

   const handleClickCategory = item => {
      const newCategory = item.target.innerText.toLowerCase();
      setCategory(newCategory);
      dispatch(filterProductsSlice.actions.categoryChange(newCategory));
   };

   return (
      <>
         <div className="uppercase shop__category">
            <h2 className="text-lead font-[500] mb-10">categories</h2>
            <h4 className="px-6 py-2 bg-dark text-light">apple</h4>
            <p
               onClick={item => handleClickCategory(item)}
               className="px-6 py-2 capitalize cursor-pointer text-secondary hover:text-warning"
            >
               all
            </p>

            {shopCategory.map((cate, index) => (
               <ul key={index} className="my-3">
                  <li className="px-6 py-2 bg-slate-100 font-[500]">
                     {cate.categroy}
                  </li>
                  {cate.item.map((item, itemIndex) => (
                     <li
                        onClick={item => handleClickCategory(item)}
                        key={itemIndex}
                        className="px-6 py-2 capitalize cursor-pointer text-secondary hover:text-warning"
                     >
                        {item}
                     </li>
                  ))}
               </ul>
            ))}
         </div>
      </>
   );
}
