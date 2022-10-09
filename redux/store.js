import { configureStore } from '@reduxjs/toolkit';
import coins from "./slices/coinSlices";
import pagination from "./slices/paginationSlice";


export const store = configureStore({
    reducer: {
        coins,
        pagination,
    }  
});

