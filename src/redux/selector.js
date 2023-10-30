import { createSelector } from '@reduxjs/toolkit';

// Tạo selector ở đây
export const productListSelector = state => state.product.products; // Lấy danh sách sản phẩm từ Redux store

export const searchInputChangeSelector = state => state.filters.searchInput; // Lấy giá trị đầu vào tìm kiếm từ Redux store

export const categoryFitlerSelector = state => state.filters.category; // Lấy giá trị bộ lọc danh mục từ Redux store

export const detailProductSelector = state => state.detailProduct.productID; // Lấy productID của sản phẩm chi tiết từ Redux store

export const cartItemSelector = state => state.cart.cartItems; // Lấy danh sách các sản phẩm trong giỏ hàng từ Redux store

export const remainingProduct = createSelector(
   productListSelector,
   searchInputChangeSelector,
   categoryFitlerSelector,
   (productList, searchInput, categoryFilter) => {
      // Tạo ra danh sách sản phẩm còn lại dựa trên các bộ lọc và tìm kiếm
      return productList.filter(product => {
         if (categoryFilter === 'all') {
            return product.name.includes(searchInput); // Lọc sản phẩm theo tên nếu danh mục là 'all'
         }
         return product.category.includes(categoryFilter)
            ? product.name.includes(searchInput) // Lọc sản phẩm theo tên và danh mục nếu danh mục khác 'all'
            : product.category.includes(categoryFilter);
      });
   },
);

export const detailProducts = createSelector(
   productListSelector,
   detailProductSelector,
   (productList, productID) => {
      // Lấy thông tin sản phẩm chi tiết từ danh sách sản phẩm
      return productList.find(product => product._id.$oid === productID);
   },
);
