import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: [],
};

const fetchCoins = createAsyncThunk(
  'coins/fetchCoins',
  async () => {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    return response.data
  }
)

export const coinSlices = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        getCoins(state, actions) {
            state.items.push(actions.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCoins, (state, action) => {
            // Add user to the state array
            console.log(action.payload)
            console.log(state)
        })
    }
});

export const { getCoins} = coinSlices.actions;

export default coinSlices.reducer;




