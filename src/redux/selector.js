import { createSelector } from '@reduxjs/toolkit';

// Tạo selector ở đây
export const productListSelector = state => state.product.products;

export const searchInputChangeSelector = state => state.filters.searchInput;

export const categoryFitlerSelector = state => state.filters.category;

export const detailProductSelector = state => state.detailProduct.productID;

export const cartItemSelector = state => state.cart.cartItems;

export const remainingProduct = createSelector(
   productListSelector,
   searchInputChangeSelector,
   categoryFitlerSelector,
   (productList, searchInput, categoryFilter) => {
      return productList.filter(product => {
         if (categoryFilter === 'all') {
            return product.name.includes(searchInput);
         }
         return product.category.includes(categoryFilter)
            ? product.name.includes(searchInput)
            : product.category.includes(categoryFilter);
      });
   },
);

export const detailProducts = createSelector(
   productListSelector,
   detailProductSelector,
   (productList, productID) => {
      return productList.find(product => product._id.$oid === productID);
   },
);
