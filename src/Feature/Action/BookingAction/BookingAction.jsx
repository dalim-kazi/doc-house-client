import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import axiosSecure from "../../../Component/UseAxiosSecure/UseAxiosSecure";


export const AllBookingGet = createAsyncThunk("booking/AllBookingGet",

    async (email) => {
        try {
            const res = await axiosSecure.get(`/booking?email=${email}`)
            const booking = res.data
            return booking
        } catch (error) {
            throw new Error(error)
        }
    })

export const SingleUserBooking = createAsyncThunk("booking/SingleUserBooking", async (email) => {
    try {
        const res = await axiosSecure.get(`/booking/userBooking?email=${email}`)
        const userBooking = res.data
        return userBooking
    } catch (error) {
        throw new Error(error.message)
    }
})

export const UserBookingPost = createAsyncThunk("booking/UserBookingPost", async (bookingDetails) => {
    try {
        const res = await axios.post("https://doc-house-server-iota.vercel.app/booking", bookingDetails)
        const saveBooking = res.data
        toast.success("Successful!!")
        return saveBooking
    } catch (error) {
        toast.error("already Booking")
        throw new Error(error.message)
    }
})

export const DeleteBooking = createAsyncThunk("booking/DeleteBooking",
    async (id) => {
    try {
        const res = await axiosSecure.delete(`/booking?id=${id}`)
        const result = res.data 
        toast.success("Successful!!")
        return result 

    } catch (error) {
        toast.error(error.code)
        throw new Error(error.message)
    }
    })

export const UpdateBooking = createAsyncThunk("booking/UpdateBooking", async (newBooking) => {
       try {
           const res = await axiosSecure.put("/booking",newBooking)
           const result = res.data 
           toast.success("Successful")
           return result
       } catch (error) {
        throw new Error(error.message)
       }
    })