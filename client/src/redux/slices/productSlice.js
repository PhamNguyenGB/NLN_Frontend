import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetAllProducts = createAsyncThunk(
    '/products',
    async () => {
        const request = await axios.get('http://localhost:8080/api/products');
        return request;
    }
)

export const getTypeProduct = createAsyncThunk(
    '/products/type',
    async (type) => {
        const request = await axios.get(`http://localhost:8080/api/products/${type}`);
        return request.data;
    }
)

export const getProductByID = createAsyncThunk(
    'product/id',
    async (id) => {
        const request = await axios.get(`http://localhost:8080/api/products/oneProduct/${id}`);
        return request.data;
    }
)

export const getSimilarProduct = createAsyncThunk(
    'product/similar',
    async ({ type, idProduct }) => {
        const request = await axios.get(`http://localhost:8080/api/products/similar/${type}/${idProduct}`);
        return request.data;

    }
)


const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: null,
        error: null,
        similarProducts: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetAllProducts.pending, (state) => {
                state.loading = true;
                state.products = null;
                state.error = null;
            })
            .addCase(fetAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(fetAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = null;
                state.error = action.payload.data.Mess;
            })

            //Get type of product
            .addCase(getTypeProduct.pending, (state) => {
                state.loading = true;
                state.products = null;
                state.error = null;
            })
            .addCase(getTypeProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;;
                state.error = action.payload.Mess;
            })
            .addCase(getTypeProduct.rejected, (state, action) => {
                state.loading = false;
                state.products = null;
                state.error = action.payload.Mess;
            })

            //Get product by id
            .addCase(getProductByID.pending, (state) => {
                state.loading = true;
                state.products = null;
                state.error = null;
            })
            .addCase(getProductByID.fulfilled, (state, action) => {
                console.log("check action", action)
                state.loading = false;
                state.products = action.payload;
                state.error = action.payload.Mess;
            })
            .addCase(getProductByID.rejected, (state, action) => {
                state.loading = false;
                state.products = null;
                state.error = action.payload.Mess;
            })

            //Get similar products
            .addCase(getSimilarProduct.pending, (state) => {
                state.loading = true;
                state.similarProducts = null;
                state.error = null;
            })
            .addCase(getSimilarProduct.fulfilled, (state, action) => {
                state.loading = true;
                state.similarProducts = action.payload;
                state.error = action.payload.Mess;
            })
            .addCase(getSimilarProduct.rejected, (state, action) => {
                state.loading = true;
                state.similarProducts = action.payload;
                state.error = action.payload.Mess;
            })
    },
})

export default productSlice.reducer;
