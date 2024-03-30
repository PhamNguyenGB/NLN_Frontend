import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addOrderDetail = createAsyncThunk(
    'addOrder',
    async (data) => {
        let request = await axios.post('http://localhost:8080/api/orderDetails/addOrderDetail', data);
        return request.data;
    }
)

const orderDetailSlice = createSlice({
    name: 'orderDetail',
    initialState: {
        loading: false,
        error: null,
        mess: '',
    },
    extraReducers: (builder) => {
        builder
            .addCase(addOrderDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.mess = '';
            })
            .addCase(addOrderDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.mess = action.payload.Mess;
            })
            .addCase(addOrderDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.mess = action.payload.Mess;
            })
    }
})

export default orderDetailSlice.reducer;