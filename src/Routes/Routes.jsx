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
import AdminHome from "../Admin/AdminHome/AdminHome";
import AdminApi from "../Admin/AdminApi/AdminApi";
import SubCity from "../Home/CountryData/SubCity";
import Post from "../Components/Dashboard/Post/Post";

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
        path: "/:country/:city/:subcities",
        element: <SubCity />,
        loader: ({params})=> fetch(`http://localhost:5000/country/${params.id}`, 
          console.log(params, "params")
        )
      },   
       
      {
        path: "/dashboard",
        element: <Dashboard />,
      }, 
      {
        path: "/dashboard/post",
        element: <Post />,
      }, 
      {
        path: "/web-admin",
        element: <AdminLogin/>
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
    path: "/web-admin",
    element: <Admin />,
    children: [
      {
        path: "admin-dashboard",
        element: <AdminHome />,
      },
      {
        path: "api-update",
        element: <AdminApi />,
      },
    ]
  }
 
]);

export default Routes;
