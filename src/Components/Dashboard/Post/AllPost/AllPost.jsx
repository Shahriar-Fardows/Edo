import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllPost = () => {

    const {subcat , subcities } = useParams();
    const [post , setPost] = useState([]);
    console.log(post , subcat , subcities);

    useEffect(()=>{
        fetch(`http://localhost:5000/post`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])


    return (
        <div>
            
        </div>
    );
};

export default AllPost;