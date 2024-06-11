import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

const useAdmin = () => {
    const { user } = useAuthContext();
    const [emails, setEmails] = useState([]);
    const [admin, setAdmin] = useState(false);
    const adminEmail = emails.length > 0 ? emails[0].email : null;
    console.log(adminEmail, 'adminEmail');

    useEffect(() => {
        fetch(`http://localhost:5000/email`)
            .then((response) => response.json())
            .then((data) => {
                setEmails(data);
            })
            .catch((error) => console.error('Error fetching emails:', error));
    }, []);

    useEffect(() => {
        if (user && adminEmail) {
            if (user.email === adminEmail) {
                console.log('email matched');
                setAdmin(true);
            }
        }
    }, [adminEmail, user]);

    return { admin };
};

export default useAdmin;
