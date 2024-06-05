import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useAdmin = () => {
    const { user } = useAuthContext();
    const [email, setEmail] = useState([]);
    const [admin, setAdmin] = useState('false');
    console.log(admin, 'admin');

    useEffect(() => {
        fetch(`http://localhost:5000/email`)
            .then((response) => response.json())
            .then((data) => {
                setEmail(data);
            });
    }, []);

    useEffect(() => {
        if (email.length > 0 && user && user.email) {
            if (email[0].email === user.email) {
                console.log('email matched');
                setAdmin(true);
            }
        }
    }, [email, user]);

    return { admin };
};

export default useAdmin;