import { createSlice } from "@reduxjs/toolkit";
import { AllBookingGet, SingleUserBooking, UserBookingPost,} from "../Action/BookingAction/BookingAction";

const initialState = {
    booking: [],
    isLoading: false,
    isError: null
}

const bookingSlice = createSlice({
    name: "booking",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AllBookingGet.pending, (state) => {
                state.isLoading = true
            })
            .addCase(AllBookingGet.fulfilled, (state, action) => {
                state.booking = action.payload
                state.isLoading = false
                state.isError = null
            })
            .addCase(AllBookingGet.rejected, (state, action) => {
                state.booking = [],
                state.isLoading = false
                state.isError = action.error.message
            })
            .addCase(SingleUserBooking.pending, (state) => {
            state.isLoading=true
            })
            .addCase(SingleUserBooking.fulfilled, (state, action) => {
                state.booking = action.payload 
                state.isLoading = false
                state.isError = null
            })
            .addCase(SingleUserBooking.rejected, (state, action) => {
                state.booking = []
                state.isLoading = false
                state.isError=action.error.message
            })
            .addCase(UserBookingPost.pending, (state) => {
                state.isLoading=true
                })
                .addCase(UserBookingPost.fulfilled, (state, action) => {
                    state.booking = action.payload 
                    state.isLoading = false
                    state.isError = null
                })
                .addCase(UserBookingPost.rejected, (state, action) => {
                    state.booking = []
                    state.isLoading = false
                    state.isError=action.error.message
                })
    }
})

export default bookingSlice.reducer