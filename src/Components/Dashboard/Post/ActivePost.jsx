import { useEffect, useState } from "react";
import useAuthContext from "../../../Context/useAuthContext";
import ActivePostInfo from "./ActivePostInfo";

const ActivePost = () => {

    const { user } = useAuthContext();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/post?email=${user?.email}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            });
    }, [user?.email]);

    return (
        <div className="border border-sky-500 border-dashed py-10 px-10 my-5 w-full ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Post Id 
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map(post => <ActivePostInfo key={post._id} post={post} />)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ActivePost;