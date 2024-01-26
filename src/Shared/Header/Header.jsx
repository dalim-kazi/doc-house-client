import { NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/icons/doctor-logo.png';
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const user = useSelector(state => state.user.user);
  const location = useLocation();

  const isNavLinkActive = (path) => location.pathname === path;

  return (
    <div className="navbar bg-base-100 md:px-10 px-5 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to={"/"} className={isNavLinkActive("/") ? "bg-black text-white" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/appointment"} className={isNavLinkActive("/appointment") ? "bg-black text-white" : ""}>
                Appointment
              </NavLink>
            </li>
            <li>
              {user ? (
                    <NavLink to={"/dashboard"} className={isNavLinkActive("/dashboard") ? "bg-black text-white" : ""}>
                      Dashboard
                    </NavLink>) : (
                <NavLink to={"/login"} className={isNavLinkActive("/login") ? "bg-black text-white" : ""}>
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <img className="w-14 md:w-24" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[1.3rem]">
          <li>
            <NavLink to={"/"} className={isNavLinkActive("/") ? "bg-black text-white" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/appointment"} className={isNavLinkActive("/appointment") ? "bg-black text-white" : ""}>
              Appointment
            </NavLink>
          </li>
          <li>
            {user ?   (
                    <NavLink to={"/dashboard"} className={isNavLinkActive("/dashboard") ? "bg-black text-white" : ""}>
                      Dashboard
                    </NavLink>) : (
              <NavLink to={"/login"} className={isNavLinkActive("/login") ? "bg-black text-white" : ""}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Profile />
        <label htmlFor="dashboard-drawer" className="ml-5 md:hidden"><FaBars className="text-2xl"/></label>
      </div>
    </div>
  );
};

export default Header;