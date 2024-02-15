import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchProducts } from "./productsSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    // Add other reducers here if you have more slices
  },
});

// Dispatch the fetchProducts action to load initial data when the app starts
// so as to reduce the number of api calls and in this case load products in
// the background even before the client reaches a page that displays them
store.dispatch(fetchProducts());

export default store;
