import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { favoritesUrl } from "../js/endpoints";

const initialState = {
    favorites: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk("favoriteList/fetchProducts", async () => {
    try {
        const response = await axios.get(favoritesUrl);
        return [...response.data];
    } catch (err) {
        return err.message;
    }
});

const favoriteSlice = createSlice({
    name: "favoriteList",
    initialState,
    reducers: {
        addProductToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeProductFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(product => product._id !== action.payload._id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.favorites = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.favorites = [];
                state.error = action.error.message;
            })
    }
});

export default favoriteSlice.reducer;