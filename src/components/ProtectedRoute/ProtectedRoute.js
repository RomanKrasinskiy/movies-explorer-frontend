import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  return (
    props.loggedIn ? <Outlet /> : <Navigate to="/" />
  )
};

export default ProtectedRoute;