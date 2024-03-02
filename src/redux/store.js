import { configureStore } from "@reduxjs/toolkit";
import joblistslice from "./joblistslice";

export const store = configureStore({
    reducer:{
        joblist: joblistslice
    }
})