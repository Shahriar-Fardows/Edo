import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sponsored from "../Sponsored/Sponsored";
import AllContent from "../Content/AllContent";


const SubCity = () => {
    const { country, city, subcities } = useParams();
    console.log(country, city, subcities);

    const [category, setCategory] = useState([]);
    console.log(category, 'category');
    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then((response) => response.json())
            .then((data) => {
                setCategory(data);
            });
    }, [])

    return (
        <div className="border border-sky-500 border-dashed px-4 my-5 w-full">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/'>{country}</Link ></li>
                    <li><Link to='/' >{city}</Link ></li>
                    <li><Link to='/' >{subcities}</Link ></li>
                </ul>
            </div>
            <div className="py-5 ">

                <div className="border flex justify-evenly border-sky-500 border-dashed py-10 px-10 my-5">
                    {
                        category.map((cat) => (
                            <div className="" key={cat._id}>
                                <h1 className="text-2xl text-sky-400 underline font-bold py-2">{cat.category}</h1>
                                <ul>
                                   {
                                        cat.sub_categories.map((subcat) => (
                                             <li key={subcat}>
                                                <Link to={`/${country}/${city}/${subcities}/${subcat}`}>{subcat}</Link>
                                             </li>
                                        ))
                                      
                                   }
                                </ul>
                            </div>
                        ))
                    }

                </div>
                <AllContent />
                <Sponsored />
            </div>
        </div>

    )
};

export default SubCity;