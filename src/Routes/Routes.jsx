import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import ForgotPassword from "../Log/ForgotPassword";
import Profile from "../Components/Profile/Profile";
import PrivetRoute from "./PrivetRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";
import AdminLogin from "../Admin/AdminLogin/AdminLogin";
import Admin from "../Admin/Admin";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },   
      {
        path: "/dashboard",
        element: <Dashboard />,
      },   
      {
        path: "/web-admin",
        element: <AdminLogin />,
      },   
      {
        path: "/web-admin/admin-dashboard",
        element: <Admin />,
      },   
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },
 
]);

export default Routes;
