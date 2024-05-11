import { useContext } from "react";
import { Contexts } from "./Context";

const useAuthContext = () => {

    const auth = useContext(Contexts);
    return auth;
};

export default useAuthContext;