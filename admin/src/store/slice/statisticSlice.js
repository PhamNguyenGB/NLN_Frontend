import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const statisticUsers = createAsyncThunk(
    'statistic/users',
    async ({ access_token }) => {
        const request = await axios.get('http://localhost:8080/api/user/statictis/users', {
            headers: {
                token: `Bearer ${access_token}`
            }
        });
        return request.data;
    }
)

export const statisticMoneyMonth = createAsyncThunk(
    'statistic/moneyMonth',
    async ({ month, access_token }) => {
        const request = await axios.post('http://localhost:8080/api/order/statisticsMonth', { month }, {
            headers: {
                token: `Bearer ${access_token}`,
                "Content-Type": "application/json",
            }
        });
        return request.data;
    }
)

export const statisticMoneyYear = createAsyncThunk(
    'statistic/moneyYear',
    async ({ year, access_token }) => {
        const request = await axios.post('http://localhost:8080/api/order/statisticsYear', { year }, {
            headers: {
                token: `Bearer ${access_token}`,
                "Content-Type": "application/json",
            }
        });
        return request.data;
    }
)

export const fetAllUsers = createAsyncThunk(
    'statistic/fetAllUsers',
    async ({ access_token }) => {
        const request = await axios.get('http://localhost:8080/api/user/statictis/getAllUsers', {
            headers: {
                token: `Bearer ${access_token}`
            }
        });
        return request.data;
    }
)

export const getTotalQuantity = createAsyncThunk(
    'statistic/totalQuantity',
    async ({ access_token }) => {
        const request = await axios.get('http://localhost:8080/api/Details/totalQuantity', {
            headers: {
                token: `Bearer ${access_token}`
            }
        });
        return request.data;
    }
)

export const getDataStatisticMoneyYear = createAsyncThunk(
    'statistic/getDataYear',
    async ({ year, access_token }) => {
        const request = await axios.post('http://localhost:8080/api/order/getData/moneyYear', { year }, {
            headers: {
                token: `Bearer ${access_token}`,
                "Content-Type": "application/json",
            }
        });
        return request.data;
    }
)

export const getDataStatisticMoneyMonth = createAsyncThunk(
    'statistic/getDataMonth',
    async ({ month, access_token }) => {
        const request = await axios.post('http://localhost:8080/api/order/getData/moneyMonth', { month }, {
            headers: {
                token: `Bearer ${access_token}`,
                "Content-Type": "application/json",
            }
        });
        return request.data;
    }
)


const statisticSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        totalUsers: null,
        moneyMonth: null,
        moneyYear: null,
        users: null,
        totalQuantity: null,
        statisticMoney: null,
    },
    extraReducers: (builder) => {
        builder
            //statistic users
            .addCase(statisticUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(statisticUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.totalUsers = action.payload;
            })
            .addCase(statisticUsers.rejected, (state, action) => {
                state.loading = false;
            })

            //statistic money month
            .addCase(statisticMoneyMonth.pending, (state) => {
                state.loading = true;
            })
            .addCase(statisticMoneyMonth.fulfilled, (state, action) => {
                state.loading = false;
                state.moneyMonth = action.payload;
            })
            .addCase(statisticMoneyMonth.rejected, (state, action) => {
                state.loading = false;
            })

            //statistic money year
            .addCase(statisticMoneyYear.pending, (state) => {
                state.loading = true;
            })
            .addCase(statisticMoneyYear.fulfilled, (state, action) => {
                state.loading = false;
                state.moneyYear = action.payload;
            })
            .addCase(statisticMoneyYear.rejected, (state, action) => {
                state.loading = false;
            })

            //fetch all users
            .addCase(fetAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = null;
            })

            // total quantity
            .addCase(getTotalQuantity.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTotalQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.totalQuantity = action.payload;
            })
            .addCase(getTotalQuantity.rejected, (state, action) => {
                state.loading = false;
                state.totalQuantity = null;
            })

            //get data money month
            .addCase(getDataStatisticMoneyMonth.pending, (state) => {
                state.loading = true;
                state.statisticMoney = null;
            })
            .addCase(getDataStatisticMoneyMonth.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.statisticMoney = action.payload;
            })
            .addCase(getDataStatisticMoneyMonth.rejected, (state, action) => {
                state.loading = false;
            })

            //get data money year
            //get data money month
            .addCase(getDataStatisticMoneyYear.pending, (state) => {
                state.loading = true;
                state.statisticMoney = null;
            })
            .addCase(getDataStatisticMoneyYear.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.statisticMoney = action.payload;
            })
            .addCase(getDataStatisticMoneyYear.rejected, (state, action) => {
                state.loading = false;
            })
    },
})

export default statisticSlice.reducer;
