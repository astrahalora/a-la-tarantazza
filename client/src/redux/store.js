import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./productsSlice";
import productDetailsReducer from "./productDetailsSlice";
import cartReducer from "./cartSlice";
import favoriteReducer, { addProductToFavorites, fetchFavorites, removeProductFromFavorites } from "./favoriteSlice";

const store = configureStore({
  reducer: {
    productList: productsReducer,
    product: productDetailsReducer,
    cart: cartReducer,
    favoriteList: favoriteReducer
  }
});

// Dispatch the fetchProducts action to load initial data when the app starts
// so as to reduce the number of api calls and in this case load products in
// the background even before the client reaches a page that displays them
store.dispatch(fetchProducts());
store.dispatch(fetchFavorites());

export default store;
