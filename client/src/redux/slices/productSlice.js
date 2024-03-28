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


const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: null,
        error: null,
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
                state.error = action.payloa.data.Mess;
            })

            //Get type of product
            .addCase(getTypeProduct.pending, (state) => {
                state.loading = true;
                state.products = null;
                state.error = null;
            })
            .addCase(getTypeProduct.fulfilled, (state, action) => {
                console.log("chcek acc", action.payload);
                state.loading = true;
                state.products = action.payload;;
                state.error = null;
            })
            .addCase(getTypeProduct.rejected, (state, acction) => {
                state.loading = true;
                state.products = null;
                state.error = acction.payload.Mess;
            })


    },
})

export default productSlice.reducer;
