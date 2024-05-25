import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

    // get the category list

    useEffect(() => {
        fetch("http://localhost:5000/category")
            .then((response) => response.json())
            .then((data) => {
                setCategoryList(data);
            });
    }, []);

    // delete the category by id 

    const deleteCategory = (id) => {

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
                fetch(`http://localhost:5000/category/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        const newCategoryList = categoryList.filter((category) => category._id !== id);
                        setCategoryList(newCategoryList);
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "category deleted on the database!",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Category List</h1><br />
            <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200" cellSpacing="0">
                <tbody>
                    <tr>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Category Name</th>


                    </tr>
                    <tr>

                        {
                            categoryList.map((category) => (
                                <td key={category._id} className=" flex justify-between items-center h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                    {category.category}
                                    <button onClick={() => deleteCategory(category._id)} className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded">Delete</button>
                                </td>
                            ))
                        }



                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default CategoryList;