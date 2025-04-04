import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice'

const store = configureStore({
    reducer : {
        inputs : appReducer
    }
})

export default store