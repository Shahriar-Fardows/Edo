import { useEffect, useState } from "react";
import AllContent from "./AllContent";

const Content = () => {

    const [contents, setContent] = useState([]);
    console.log(contents.title, "content");

    useEffect(() => {
        fetch('description.json')
            .then(res => res.json())
            .then(data => {
                setContent(data);
            });

    }, [])



    return (
        <div className="border border-green-500 border-dashed py-10 px-10 my-5 ">
            {
                contents.map(content => <AllContent key={content.id} item={content} />)
            }
        </div>
    );
};

export default Content;