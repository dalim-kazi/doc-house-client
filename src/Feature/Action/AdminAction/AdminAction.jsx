import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosSecure from "../../../Component/UseAxiosSecure/UseAxiosSecure";

export const adminGetAsync = createAsyncThunk("admin/adminGetAsync", async (email) => {
    try {
        const res = await axiosSecure.get(`/user/admin?email=${email}`)
        const admin = res.data
        return admin
    } catch (error) {
        throw new Error(error.message)
    }
})