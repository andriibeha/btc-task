import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    items: [],
    status: 'loading',
};

/* https://api.coinstats.app/public/v1/coins?skip=0&limit=100%C2%A4cy=INR */


export const fetchCoins = createAsyncThunk(
  'coins/fetchCoinsStatus',
    async (currentPage) => {

        const { data } = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${currentPage}&limit=20`);
        return data.coins
  }
)

export const coinSlices = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setCoins(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchCoins.pending]: (state, action) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchCoins.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchCoins.rejected]: (state, action) => {
            state.status = 'error';
            state.items = [];
        },
    },
});

export const { setCoins} = coinSlices.actions;

export default coinSlices.reducer;




