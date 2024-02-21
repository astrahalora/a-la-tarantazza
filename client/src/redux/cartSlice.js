import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i]._id === action.payload._id) {
                    state.products[i].quantity += 1;
                    localStorage.setItem("cart", JSON.stringify(state.products));
                    return;
                }
            }
            const productToAdd = {
                _id: action.payload._id,
                name: action.payload.name,
                quantity: 1
            }
            state.products.push(productToAdd);
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter((item) => item._id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.products));
        }
    }
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
