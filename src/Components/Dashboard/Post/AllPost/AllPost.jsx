import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AllPost = () => {
    const { city, subcities, cat, subcat } = useParams();
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch(`https://listing-web-server.up.railway.app/post`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            });
    }, []);

    return (
        <div className="border  border-dashed py-10 px-10 my-5 w-full">
            <div>
            {
                posts
                .filter(post => post.city === city && post.sub_city === subcities && post.category === cat && post.subcategory === subcat)
                .map((post) => (
                    <div key={post._id} className="border  border-dashed py-5 px-10 my-5 w-full">
                        <Link to={`${post._id}`}>{post.title}</Link>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default AllPost;
