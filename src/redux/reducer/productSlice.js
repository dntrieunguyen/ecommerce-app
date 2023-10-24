import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../apiService/API';

export const fetchProduct = createAsyncThunk(
   'products/fetchAllProduct',
   async () => {
      const res = await fetch(API);

      return res.json();
   },
);

export const productSlice = createSlice({
   name: 'products',

   initialState: {
      products: [],
      isLoading: false,
      isError: false,
   },

   reducers: {
      /* handle here!!*/
   },

   extraReducers: builder => {
      builder
         .addCase(fetchProduct.pending, (state, action) => {
            // update state loading data
            state.isLoading = true;
            state.isError = false;
         })
         .addCase(fetchProduct.fulfilled, (state, action) => {
            // update state loading data
            state.isLoading = false;
            state.isError = false;
            // update data
            state.products = action.payload;
         })
         .addCase(fetchProduct.rejected, (state, action) => {
            // update state loading data
            state.isLoading = false;
            state.isError = true;
         });
   },
});
