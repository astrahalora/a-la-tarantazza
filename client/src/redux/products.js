import { createSlice } from "@reduxjs/toolkit";
import { useFetch } from "../js/useFetch";

// const { data, isLoading, isError } = useFetch();

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        productList: null
    },
    reducers: {
        fetchProducts: (state) => {
            // state.productList = fetch here;
        },
        filterByType: (state, type) => {
            // sate.productList = filtered here
        }
    }
});

export const { fetchProducts, filterByType } = productsSlice.actions;

export default productsSlice.reducer;