import { createBrowserRouter } from "react-router-dom";
import Admin from "../Admin/Admin";
import AdminApi from "../Admin/AdminApi/AdminApi";
import AdminHome from "../Admin/AdminHome/AdminHome";
import AdminLogin from "../Admin/AdminLogin/AdminLogin";
import Dashboard from "../Components/Dashboard/Dashboard";
import AllPost from "../Components/Dashboard/Post/AllPost/AllPost";
import PostInfo from "../Components/Dashboard/Post/AllPost/PostInfo";
import Post from "../Components/Dashboard/Post/Post";
import Profile from "../Components/Profile/Profile";
import Error from "../Error/Error";
import SubCity from "../Home/CountryData/SubCity";
import Home from "../Home/Home";
import ForgotPassword from "../Log/ForgotPassword";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import Root from "../Root";
import PrivetRoute from "./PrivetRoutes";

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
        loader: ({params})=> fetch(`http://localhost:5000/${params.country}/${params.city}/${params.subcities}`)
      },   
      {
        path: "/:country/:city/:subcities/:cat/:subcat",
        element: <AllPost />,
        loader: ({params})=> fetch(`http://localhost:5000/${params.country}/${params.city}/${params.subcities}/${params.cat}/${params.subcat}`)
      },
      {
        path: "/:country/:city/:subcities/:cat/:subcat/:id",
        element: <PostInfo />,
        loader: ({params})=> fetch(`http://localhost:5000/post/${params.id}`)
        
      } 
       ,
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
