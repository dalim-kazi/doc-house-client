import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Error/Error";
import Home from "../Pages/Homes/Home/Home";
import Appointment from "../Pages/Appointments/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardPages from "../Pages/Dashboard/dashboardPages/dashboardPages";
import UserBooking from "../Pages/Dashboard/UserDashboard/UserBooking/UserBooking";
import UserHome from "../Pages/Dashboard/UserDashboard/UserHome/UserHome";
import PrivateRouter from "./PrivateRouter";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import AdminRouter from "./AdminRouter";
import ManageAppointment from "../Pages/Dashboard/AdminDashboard/ManageAppointment/ManageAppointment";
import PaymentFailed from "../Pages/Dashboard/PaymentMethed/PaymentFailed/PaymentFailed";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/appointment",
                element:<Appointment/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/signUP",
                element:<SignUp/>
            },
            {
                path: "/paymentFailed",
                element:<PaymentFailed/>
            }
        ]
    },
    {
        path: "dashboard",
        element:<PrivateRouter><DashboardPages/></PrivateRouter> ,
        children: [
        // user booking
            {
                path: "userBooking",
                element:<UserBooking/>
            },
            {
                path: "userHome",
                element:<UserHome/>
            },
            // admin 
            {
                path: "adminHome",
                element:<AdminRouter><AdminHome/></AdminRouter>
            },
            {
                path: "manageUser",
                element:<AdminRouter><ManageUser/></AdminRouter>
            },
            {
                path: "manageBooking",
                element: <AdminRouter><ManageAppointment/></AdminRouter>
            }
        ]
    }
])