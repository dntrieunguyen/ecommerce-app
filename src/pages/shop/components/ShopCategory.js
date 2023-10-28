import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProductsSlice } from '../../../redux/reducer/filterProductsSlice';

export default function ShopCategory({ shopCategory }) {
   const [isActive, setIsActive] = useState(false);
   const [category, setCategory] = useState('all');

   const dispatch = useDispatch();

   const handleClickCategory = item => {
      const newCategory = item.target.innerText.toLowerCase();

      setCategory(newCategory);
      dispatch(filterProductsSlice.actions.categoryChange(newCategory));
      setCategory('all');
   };

   return (
      <>
         <div className="shop__category">
            <h2>categories</h2>
            <h4>apple</h4>
            <p onClick={item => handleClickCategory(item)}>all</p>

            {shopCategory.map((cate, index) => (
               <ul key={index}>
                  <li className="shop__category__title">{cate.categroy}</li>
                  {cate.item.map((item, itemIndex) => (
                     <li
                        onClick={item => handleClickCategory(item)}
                        key={itemIndex}
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
