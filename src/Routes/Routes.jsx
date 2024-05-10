import {createBrowserRouter,} from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Error from "../Error/Error";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/> ,
        errorElement: <Error/> ,
        loader: () => import("../Root"),
        children: [
            {
              path: "/",
              element: <Home/> ,
            },
            
          ],

    },
]);




export default Routes;