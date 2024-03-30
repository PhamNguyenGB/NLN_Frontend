import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addOrder = createAsyncThunk(
    'addOrder',
    async (data) => {
        console.log(data);
        let request = await axios.post('http://localhost:8080/api/order/addOrder', data);
        return request.data;
    }
)

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: false,
        error: null,
        mess: '',
    },
    extraReducers: (builder) => {
        builder
            .addCase(addOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.mess = '';
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.mess = action.payload.Mess;
            })
            .addCase(addOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.mess = action.payload.Mess;
            })
    }
})

export default orderSlice.reducer;