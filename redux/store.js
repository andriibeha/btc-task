import { configureStore } from '@reduxjs/toolkit';
import coins from "./slices/coinSlices"


export const store = configureStore({
    reducer: {
        coins,
    }  
});

