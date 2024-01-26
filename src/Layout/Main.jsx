import { Outlet, useLocation } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation()
    const pathName =location.pathname.includes("login") || location.pathname.includes("signUp")|| location.pathname.includes("paymentFailed") 
     
    return (
        <div>
            <Header />
            <Outlet />
           {pathName?<></>: <Footer/>}
        </div>
    );
};

export default Main;