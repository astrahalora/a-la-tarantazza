import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchProducts } from "./productsSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    // Add other reducers here if you have more slices
  },
});

// Dispatch the fetchProducts action to load initial data when the app starts
store.dispatch(fetchProducts());

export default store;
