import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './reducer/cartSlice';
import { productSlice } from './reducer/productSlice';
import { filterProductsSlice } from './reducer/filterProductsSlice';
import { detailProductSlice } from './reducer/detailProductSlice';
import { showPopSlice } from './reducer/showPopSlice';

export const store = configureStore({
   reducer: {
      /*
        nameReducer_1 : reducerSlice_1.reducer,
        nameReducer_2 : reducerSlice_2.reducer,
        nameReducer_3 : reducerSlice_3.reducer,
        */
      cart: cartSlice.reducer,
      product: productSlice.reducer,
      filters: filterProductsSlice.reducer,
      detailProduct: detailProductSlice.reducer,
      popup: showPopSlice.reducer,
   },
});
