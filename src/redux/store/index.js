import { configureStore } from '@reduxjs/toolkit'
import storeReducer from '../slice/store.slice.js'
export const store = configureStore({
    reducer: {
        stores: storeReducer
    },
})