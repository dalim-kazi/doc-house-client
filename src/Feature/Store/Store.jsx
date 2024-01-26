import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Reducer/AuthSlice";
import AppointmentServiceReducer from "../Reducer/AppointmentServiceSlice";
import BookingReducer from "../Reducer/BookingSlice";
import UserReducer from "../Reducer/UserSlice";
import AdminReducer from "../Reducer/AdminSlice";



const store = configureStore({
    reducer: {
        user: AuthReducer,
        service: AppointmentServiceReducer,
        booking: BookingReducer,
        saveUser: UserReducer,
        admin:AdminReducer
    }
})

export default store