import { useSelector } from "react-redux";
import Spinner from "../Component/Spinner/Spinner";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRouter = ({ children }) => {
    const { user, isLoading } = useSelector(state => state.user)
    const location=useLocation()
    if (isLoading) {
        return <Spinner/>
    }

     if (user) {
        return children
    }

    return  <Navigate to="/login" state={{ from: location }} replace />
};
PrivateRouter.propTypes = {
    children: PropTypes.any
  };
export default PrivateRouter;