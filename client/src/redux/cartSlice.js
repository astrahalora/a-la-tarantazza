import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((item) => item._id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.products));
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;