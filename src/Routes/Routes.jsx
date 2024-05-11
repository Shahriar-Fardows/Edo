import {createBrowserRouter,} from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import ForgotPassword from "../Log/ForgotPassword";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/Profile/Profile";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/> ,
        errorElement: <Error/> ,
        children: [
            {
              path: "/",
              element: <Home/> ,
            },
            {
              path: "/dashboard",
              element: <Dashboard/> ,
            },
            {
              path: "/profile",
              element: <Profile/> ,
            },
            {
              path: "/login",
              element: <Login/> ,
            },
            {
              path: "/signUp",
              element: <SignUp/> ,
            },
            {
              path: "/forgotPassword",
              element: <ForgotPassword/> ,
            },
            
          ],

    },
]);




export default Routes;