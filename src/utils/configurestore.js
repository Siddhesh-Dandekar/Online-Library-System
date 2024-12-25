import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookslice.js"

const appStore = configureStore({
    reducer:{
        book: bookReducer,
    }
})

export default appStore;