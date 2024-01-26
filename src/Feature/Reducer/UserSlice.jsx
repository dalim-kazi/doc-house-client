import { createSlice } from "@reduxjs/toolkit";
import { UserGetAsync, UserPostAsync } from "../Action/UserAction/UserAction";

const initialState = {
    user: [],
    isLoading: false,
    isError:null
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserGetAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(UserGetAsync.fulfilled, (state, action) => {
                state.user = action.payload 
                state.isLoading = false
                state.isError=null
            })
            .addCase(UserGetAsync.rejected, (state, action) => {
                state.user = null 
                state.isLoading = false 
                state.isError =action.payload
            })
            .addCase(UserPostAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(UserPostAsync.fulfilled, (state, action) => {
                state.user = action.payload 
                state.isLoading = false
                state.isError=null
            })
            .addCase(UserPostAsync.rejected, (state, action) => {
                state.user = null 
                state.isLoading = false 
                state.isError =action.payload
        })
    }
})

export default userSlice.reducer