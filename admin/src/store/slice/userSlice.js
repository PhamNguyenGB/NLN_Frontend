import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const loginStaff = createAsyncThunk(
    'staff/loginStaff',
    async (userCredentials) => {
        const request = await axios.post('http://localhost:8080/api/staff/login', userCredentials);
        const response = await request.data;
        localStorage.setItem('staff', JSON.stringify(response.Data));
        return response;
    }
);

const userSlice = createSlice({
    name: 'staff',
    initialState: {
        loading: false,
        staff: null,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginStaff.pending, (state) => {
                state.loading = true;
                state.staff = null;
                state.error = null;
            })
            .addCase(loginStaff.fulfilled, (state, action) => {
                state.loading = false;
                state.staff = action.payload.Data;
                state.error = action.payload.Mess;
            })
            .addCase(loginStaff.rejected, (state, action) => {
                state.loading = false;
                state.staff = null;
                state.error = action.payload.Mess;
            })
    }
});

export default userSlice.reducer;