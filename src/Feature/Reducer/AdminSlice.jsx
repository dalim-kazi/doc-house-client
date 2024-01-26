import { createSlice } from "@reduxjs/toolkit";
import { adminGetAsync } from "../Action/AdminAction/AdminAction";
const initialState = {
    admin:null,
    isLoading:true,
    isError:null
}
const adminSlice = createSlice({
    name: "admin",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(adminGetAsync.pending, (state) => {
                state.isLoading = true 
            })
            .addCase(adminGetAsync.fulfilled, (state, action) => {
                state.admin = action.payload 
                state.isLoading = false 
                state.isError = null
            })
            .addCase(adminGetAsync.rejected, (state, action) => {
                state.isLoading = false 
                state.isError = action.error.message 
                state.admin=null
        })
    }
})

export default adminSlice.reducer