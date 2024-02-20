import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: []
}

export const productDetailsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.details = action.payload;
        }
    }
})

export const { setProduct } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;