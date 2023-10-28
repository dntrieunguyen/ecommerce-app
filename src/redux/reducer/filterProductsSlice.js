import { createSlice } from '@reduxjs/toolkit';

export const filterProductsSlice = createSlice({
   name: 'filterProducts',
   initialState: {
      category: 'all',
      searchInput: '',
      sortInput: 'Default Sort',
   },
   reducers: {
      // handle here
      searchInputChange: (state, action) => {
         state.searchInput = action.payload;
      },

      categoryChange: (state, action) => {
         state.category = action.payload;
      },

      DefaultFilter: (state, action) => {
         state.category = 'all';
         state.searchInput = '';
      },
   },
});
