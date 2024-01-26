import { createSlice } from "@reduxjs/toolkit";
import { allAppointmentService } from "../Action/AppointmentServiceAction/AppointmentServiceAction";

const initialState = {
    service: [],
    isLoading: false,
    isError:null
}

const appointmentServiceSlice = createSlice({
    name: "service",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allAppointmentService.pending, (state) => {
                state.isLoading = true
            })
            .addCase(allAppointmentService.fulfilled, (state, action) => {
                state.service = action.payload
                state.isLoading = false
                state.isError=null
            })
            .addCase(allAppointmentService.rejected, (state, action) => {
                state.service =[]
                state.isLoading = false
                state.isError=action.error.message
        })
    }
})

export default appointmentServiceSlice.reducer