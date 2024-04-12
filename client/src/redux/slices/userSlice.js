import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk(
    'user/login',
    async (userCredentials) => {
        const request = await axios.post('http://localhost:8080/api/user/login', userCredentials);
        const response = request.data;
        localStorage.setItem('user', JSON.stringify(response.Data));
        return response;
    }
);

export const register = createAsyncThunk(
    'user/register',
    async (userData) => {
        const request = await axios.post('http://localhost:8080/api/user/register', userData);
        const response = request.data;
        return response;
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (access_token) => {
        const request = await axios.post('http://localhost:8080/api/user/logout', {}, {
            headers: {
                token: `Bearer ${access_token}`,
            },
        });
        localStorage.removeItem('user');
        return request.data;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            // login
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.Data;
                state.error = action.payload.Mess;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload.Mess;
            })

            //register
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = true;
                state.user = null;
                state.error = action.payload.Mess;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = true;
                state.user = null;
                state.error = action.payload.Mess;
            })

            //logout
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = true;
                state.error = action.payload?.Mess;
                state.user = null;
            })

            .addCase(logout.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload?.Mess;
            })

    }
});

export default userSlice.reducer;