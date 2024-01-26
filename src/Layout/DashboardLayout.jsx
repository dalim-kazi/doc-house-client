import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { adminGetAsync } from "../Feature/Action/AdminAction/AdminAction";
import { CgProfile } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const DashboardLayout = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const isNavLinkActive = (path) => location.pathname == path
    const { admin } = useSelector(state => state.admin)
    const { user } = useSelector(state => state.user)
    useEffect(() => {
        try {
            dispatch(adminGetAsync(user?.email))
        } catch (error) {
            throw new Error(error.message)
        }
    }, [dispatch, user?.email])
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-200">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-white text-base-content border-r-2 text-xl">
                    {
                        admin?.role === "admin" ?
                            <>
                                 <li className="mt-2"><NavLink to={"/dashboard/adminHome"} className={isNavLinkActive('/dashboard/adminHome') ? "bg-black text-white" : ""}><FaUsers/>Admin Home</NavLink></li>
                                <li className="mt-2"><NavLink to={"/dashboard/manageUser"} className={isNavLinkActive('/dashboard/manageUser') ? "bg-black text-white" : ""}><FaUsers/> Manage User</NavLink></li>
                                <li className="mt-2"><NavLink to={"/dashboard/manageBooking"} className={isNavLinkActive('/dashboard/manageBooking') ? "bg-black text-white" : ""}><FaBriefcase/> Manage Appointment</NavLink></li>
                                <li className="mt-2"><NavLink to={"/dashboard/userBooking"} className={isNavLinkActive('/dashboard/userBooking') ? "bg-black text-white" : ""}><FaBriefcase/> My Appointment</NavLink></li>
                            </>
                            :

                            <>
                                <li className="mt-2"><NavLink to={"/dashboard/userHome"} className={isNavLinkActive('/dashboard/userHome') ? "bg-black text-white" : ""}><CgProfile/> Profile</NavLink></li>

                                <li className="mt-2"><NavLink to={"/dashboard/userBooking"} className={isNavLinkActive('/dashboard/userBooking') ? "bg-black text-white" : ""}><FaBriefcase/> My Appointment</NavLink></li>

                            </>
                    }
                    <div className="border-t-2 mt-3 mb-2 border-blue-600 w-full"></div>
                    <li className="mt-2"><NavLink to={"/"} className={isNavLinkActive('/') ? "bg-black text-white" : ""}><FaHome/> Home</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;