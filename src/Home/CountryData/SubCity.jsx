import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sponsored from "../Sponsored/Sponsored";
import AllContent from "../Content/AllContent";
import { MdDelete } from "react-icons/md";
import useAdmin from "../../Context/useAdmin";


const SubCity = () => {
    const { admin } = useAdmin();
    console.log(admin, 'admin hllll hooook ');
    const { country, city, subcities } = useParams();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then((response) => response.json())
            .then((data) => {
                setCategory(data);
            });

    }, []);

    // delete category

    const deleteItem = () => {
        console.log('delete');
    }
  

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
                <div className="lg:border lg:flex justify-evenly lg:border-sky-500 border-dashed py-10 lg:px-10 my-5">
                    {category.map((cat) => (
                        <div className="lg:w-80 py-2" key={cat._id}>
                            <div className="w-full text-center px-4 text-sm border rounded text-slate-200 border-slate-900 bg-slate-700" role="alert">
                                <h1 className="text-xl text-sky-400">{cat.category}</h1>
                            </div>
                            <div className="w-72 mx-4 py-2">
                                <ul>
                                    {cat.sub_categories.map((subcat) => (
                                        <li key={subcat} className="border-b py-2 flex items-center justify-between hover:bg-slate-400">
                                            <Link to={`/${country}/${city}/${subcities}/${subcat}`}>{subcat} </Link>
                                            {admin && <MdDelete onClick={deleteItem} />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <AllContent />
                <Sponsored />
            </div>
        </div>
    );
};

export default SubCity;
