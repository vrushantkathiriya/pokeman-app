import { configureStore } from "@reduxjs/toolkit";
import {movesReducer} from '../Redux/moveSlice'
export const store = configureStore({
    reducer : {
        moves : movesReducer,
    }
})
