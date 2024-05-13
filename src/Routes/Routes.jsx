import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import ForgotPassword from "../Log/ForgotPassword";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/Profile/Profile";
import PrivetRoute from "./PrivetRoutes";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import Post from "../Components/Dashboard/Post/Post";
import Recharge from "../Components/Dashboard/Recharge/Recharge";

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
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivetRoute>
            <DashboardHome />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/post",
        element: (
          <PrivetRoute>
            <Post />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/recharge_balance",
        element: (
          <PrivetRoute>
            <Recharge />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default Routes;
