/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Contexts } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {


    const { user } = useContext(Contexts);
    const ip = useLocation();
    console.log(ip)
    if (user) {
        return children;
    }
    return <Navigate state={ip.pathname} to='/'></Navigate>


};

export default PrivetRoute;