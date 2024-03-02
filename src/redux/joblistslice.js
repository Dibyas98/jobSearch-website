import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState={
    jobList :[]
}

const joblistslice = createSlice({
    name:'joblist',
    initialState:initialState,
    reducers:{
        getJobList :  (state,actions)=>{
            state.jobList = [...actions.payload]
            
        }
    }
})
export const {getJobList} = joblistslice.actions
export default joblistslice.reducer