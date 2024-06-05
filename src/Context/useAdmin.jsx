import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useAdmin = () => {
    const { user } = useAuthContext();
    const [email, setEmail] = useState([]);
    const [admin, setAdmin] = useState(false);
    console.log(admin, 'admin');

    useEffect(() => {
        fetch(`http://localhost:5000/email`)
            .then((response) => response.json())
            .then((data) => {
                setEmail(data);
            });
    }, []);

    useEffect(() => {
        if (user) {
            if (user.email === email[0].email) {
                console.log('email matched');
                setAdmin(true);
            }
        }
    }, [email, user]);

    return { admin };
};

export default useAdmin;