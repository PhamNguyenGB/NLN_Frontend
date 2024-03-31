import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetAllOrder = createAsyncThunk(
    'order/fetAll',
    async (access_token) => {
        let request = await axios.get('http://localhost:8080/api/order/', {
            headers: {
                token: `Bearer ${access_token}`,
                "Content-Type": "multipart/form-data",
            }
        });
        return request.data;
    }
)


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: false,
        orders: null,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetAllOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.orders = null;
            })
            .addCase(fetAllOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.error = action.payload.Mess;
                state.orders = action.payload.Data;
            })
            .addCase(fetAllOrder.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload.Mess;
                state.orders = null;
            })
    }
});

export default orderSlice.reducer;