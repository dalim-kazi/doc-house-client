import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allAppointmentService = createAsyncThunk("service/allAppointmentService", async (date) => {
    try {
        const res = await axios.get(`https://doc-house-server-iota.vercel.app/appointmentService?date=${date}`)
        const service = res.data
        return service
    } catch (error) {
        const message = error.message 
        throw new Error (message)
    }
})