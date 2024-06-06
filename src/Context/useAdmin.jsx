import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useAdmin = () => {
    const { user } = useAuthContext();
    const [emails, setEmail] = useState([]);
    const [admin, setAdmin] = useState(false);
    const adminEmail = emails[0];

    useEffect(() => {
        fetch(`http://localhost:5000/email`)
            .then((response) => response.json())
            .then((data) => {setEmail(data);
            });
    }, []);

    useEffect(() => {
        if (user) {
            if (user.email === adminEmail.email) {
                console.log('email matched');
                setAdmin(true);
            }
        }
    }, [adminEmail, user]);

    return { admin };
};

export default useAdmin;