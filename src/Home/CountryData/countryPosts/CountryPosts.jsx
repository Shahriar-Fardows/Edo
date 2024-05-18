import { useLoaderData } from "react-router-dom";

const CountryPosts = () => {
    const loader = useLoaderData();
    console.log(loader , "posts");

    const { description,  title  , company , experience_days , location , basic_qualifications , about_job , responsibilities} = loader;



    return (
        <div>
            <h1>{description}</h1> 
        </div>
    );
};

export default CountryPosts;