import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../Context/useAdmin";
import AllContent from "../Content/AllContent";
import Sponsored from "../Sponsored/Sponsored";

const SubCity = () => {
    const { admin } = useAdmin();
    const { country, city, subcities } = useParams();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then((response) => response.json())
            .then((data) => {
                setCategory(data);
            });
    }, []);

    // delete subcategory
    const deleteItem = (categoryId, subcat) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/${categoryId}/sub-category/${encodeURIComponent(subcat)}`, {
                    method: 'DELETE'
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("Sub-category deleted:", data);
                        fetchCategories(); // Refresh categories
                    })
                    .catch(error => {
                        console.error("Error deleting sub-category:", error);
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });


    };

    const fetchCategories = () => {
        fetch(`http://localhost:5000/category`)
            .then((response) => response.json())
            .then((data) => {
                setCategory(data);
            });
    };

    return (
        <div className="border border-sky-500 border-dashed px-4 my-5 w-full">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/'>{country}</Link ></li>
                    <li><Link to='/'>{city}</Link ></li>
                    <li><Link to='/'>{subcities}</Link ></li>
                </ul>
            </div>
            <div className="py-5">
                <div className="lg:border lg:flex justify-evenly lg:border-sky-500 border-dashed py-10 lg:px-10 my-5">
                    {category.map((cat) => (
                        <div className="lg:w-80 py-2" key={cat._id}>
                            <div className="w-full text-center px-4 text-sm border rounded text-slate-200 border-slate-900 bg-slate-700" role="alert">
                                <h1 className="text-xl text-sky-400">{cat.category}</h1>
                            </div>
                            <div className="w-72 mx-4 py-2">
                                <ul>
                                    {cat.sub_categories.map((subcat) => (
                                        <li key={subcat} className="border-b py-2 flex items-center justify-between ">
                                            <div className="w-[15rem] hover:bg-slate-400">
                                                <Link className="hover:text-white" to={`/${country}/${city}/${subcities}/${subcat}`}>{subcat}</Link>
                                            </div>
                                            <div>
                                                <span>
                                                    {
                                                        admin ? <MdDelete className="hover:text-red-500" onClick={() => deleteItem(cat._id, subcat)} /> : <GoDotFill />
                                                    }
                                                </span>
                                            </div>
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
