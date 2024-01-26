import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosSecure from "../../../Component/UseAxiosSecure/UseAxiosSecure";
export const UserGetAsync = createAsyncThunk("user/UserGetAsync", async (email) => {
    try {
        const res = await axiosSecure.get(`/user?email=${email}`)
        const user = res.data 
        return user
    } catch (error) {
        throw new Error(error.message)
    }
})


export const UserPostAsync = createAsyncThunk("user/UserPostAsync", async (saveUser) => {
    try {
        const res = await axios.post("https://doc-house-server-iota.vercel.app/user",saveUser)
        const newUser = res.data 
        return newUser
    } catch (error) {
        throw new Error(error.message)
    }
})

export const UserUpdateAsync = createAsyncThunk("user/UserUpdateAsync", async (user) => {
    try {
        const res = await axiosSecure.put(`/user`,user)
        const result = res.data 
        return result
    } catch (error) {
        throw new Error(error.message)
    }
})

export const UserDeleteAsync = createAsyncThunk("user/UserDeleteAsync", async (deleteUser) => {
    try {
        console.log(deleteUser)
        const res = await axiosSecure.delete(`/user?email=${deleteUser?.deleteUserEmail}`,)
        const result = res.data 
        return result
    }
    catch (error) {
        throw new Error(error.message)
    }
})