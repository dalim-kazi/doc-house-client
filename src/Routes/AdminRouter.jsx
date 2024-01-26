import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Component/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { adminGetAsync } from "../Feature/Action/AdminAction/AdminAction";

const AdminRouter = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);
  const { admin, isLoading: adminLoading } = useSelector((state) => state.admin);
  const location = useLocation();

  useEffect(() => {
    try {
      if (user?.email) {
        dispatch(adminGetAsync(user?.email));
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }, [dispatch, user?.email]);

  if (isLoading || adminLoading) {
    return <Spinner />;
  }

  // Check if the user is authenticated or if the admin role exists
  if (user && (admin?.role === "admin" || admin?.role)) {
    return children;
  }

  // Redirect to login if not authenticated
  return <Navigate to="/login" state={{ from: location }} replace />;
};

AdminRouter.propTypes = {
  children: PropTypes.any,
};

export default AdminRouter;
