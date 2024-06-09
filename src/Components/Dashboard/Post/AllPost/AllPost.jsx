import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllPost = () => {
    const { city, subcities, cat, subcat } = useParams();
    const [posts, setPosts] = useState([]);
    console.log(posts, city, subcat, subcities, cat);


    useEffect(() => {
        fetch(`http://localhost:5000/post`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            });
    }, []);

    return (
        <div>
            {
                posts
                .filter(post => post.city === city && post.sub_city === subcities && post.category === cat && post.subcategory === subcat)
                .map((post) => (
                    <div key={post._id} className="border border-sky-500 border-dashed py-10 px-10 my-5 w-full">
                        <h1>{post.title}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default AllPost;
