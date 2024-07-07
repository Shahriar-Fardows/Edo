import { useEffect, useState } from "react";

const TotalUser = () => {
    const [totalUser, setTotalUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/total-user")
        .then(res => res.json())
        .then(data => setTotalUser(data))
    }, [])

    return (
        <div>
            {
                totalUser.map((user, index) => (
                    <div key={index}>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default TotalUser;