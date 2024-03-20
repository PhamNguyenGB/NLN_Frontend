import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetAllProducts = createAsyncThunk(
    'staff/products',
    async () => {
        const request = await axios.get('http://localhost:8080/api/products');
        return request;
    }
)

export const createProduct = createAsyncThunk(
    'staff/product/create',
    async ({ dataproduct, access_token }) => {
        const request = await axios.post('http://localhost:8080/api/products/create', dataproduct, {
            headers: {
                token: `Bearer ${access_token}`,
                "Content-Type": "multipart/form-data",
            }
        });
        return request;
    }
)

export const deleteProduct = createAsyncThunk(
    'staff/product/delete',
    async ({ idProduct, access_token }) => {
        console.log(idProduct, access_token);
        const request = await axios.delete(`http://localhost:8080/api/products/delete/${idProduct}`, {
            headers: {
                token: `Bearer ${access_token}`,
                "Content-Type": "multipart/form-data",
            }
        })
        return request;
    }
)

export const updateProduct = createAsyncThunk(
    'staff/product/update',
    async ({ dataproduct, access_token }) => {
        console.log(access_token);
        const request = await axios.put('http://localhost:8080/api/products/update', dataproduct, {
            headers: {
                token: `Bearer ${access_token}`,
                "Content-Type": "multipart/form-data",
            }
        });
        return request;
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

            //  create product
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.products = null;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state) => {
                state.loading = false;
                state.products = null;
                state.error = null;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.products = null;
                state.error = action.payload;
            })

            // delete product
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.products = null;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state) => {
                state.loading = false;
                state.products = null;
                state.error = null;
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.loading = false;
                state.products = null;
                state.error = null;
            })

            // update product
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.products = null;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state) => {
                state.loading = false;
                state.products = null;
                state.error = null;
            })
            .addCase(updateProduct.rejected, (state) => {
                state.loading = false;
                state.products = null;
                state.error = null;
            })
    },
})

export default productSlice.reducer;
