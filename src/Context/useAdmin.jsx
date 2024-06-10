import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useAdmin = () => {
    const { user } = useAuthContext();
    const [emails, setEmail] = useState([]);
    const [admin, setAdmin] = useState(false);
    const adminEmail = emails[0];

    useEffect(() => {
        fetch(`https://listing-web-server.up.railway.app/email`)
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