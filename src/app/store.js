import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSclice';




export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})