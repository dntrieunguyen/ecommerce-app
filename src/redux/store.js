import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './reducer/cartSlice';
import { productSlice } from './reducer/productSlice';
import { filterProductsSlice } from './reducer/filterProductsSlice';
import { detailProductSlice } from './reducer/detailProductSlice';
import { showPopSlice } from './reducer/showPopSlice';
import { userAuthSlice } from './reducer/userAuthSlice';
import storage from 'redux-persist/lib/storage';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';

// const rootReducer = combineReducers({

// });

const userPersistConfig = {
   key: 'user',
   storage,
   whitelist: ['userOn', 'userCart', 'onLogIn', 'userList'],
};
const cartPersistConfig = {
   key: 'cart',
   storage,
};

const productPersistConfig = {
   key: 'product',
   storage,
};
const detailProductPersistConfig = {
   key: 'detailProduct',
   storage,
};

export const store = configureStore({
   reducer: {
      /*
        nameReducer_1 : reducerSlice_1.reducer,
        nameReducer_2 : reducerSlice_2.reducer,
        nameReducer_3 : reducerSlice_3.reducer,
        */
      cart: persistReducer(cartPersistConfig, cartSlice.reducer),
      product: persistReducer(productPersistConfig, productSlice.reducer),
      detailProduct: persistReducer(
         detailProductPersistConfig,
         detailProductSlice.reducer,
      ),
      filters: filterProductsSlice.reducer,
      popup: showPopSlice.reducer,
      userAuth: persistReducer(userPersistConfig, userAuthSlice.reducer),
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);
