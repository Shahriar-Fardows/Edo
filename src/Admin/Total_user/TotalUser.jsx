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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>status</th>
                            <th>Control</th>
                        </tr>
                    </thead>
                    <tbody>

                      <tr>
                      {
                            totalUser.map((user, index) => (
                                <tr key={index}>
                                    <tb>
                                    <h1>{user.password}</h1>
                                    </tb>
                                   <tb> <p>{user.email}</p></tb>
                                </tr>
                            ))
                        }
                      </tr>
                    </tbody>

                </table>
            </div>
           
        </div>
    );
};

export default TotalUser;