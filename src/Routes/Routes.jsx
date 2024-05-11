import {createBrowserRouter,} from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";


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
              path: "/login",
              element: <Login/> ,
            },
            {
              path: "/signUp",
              element: <SignUp/> ,
            },
            
          ],

    },
]);




export default Routes;