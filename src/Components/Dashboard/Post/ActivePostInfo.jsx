import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const ActivePostInfo = ({post}) => {

    // eslint-disable-next-line react/prop-types
    const { _id,  title, number, image, status } = post;

    
    const handleDelete = () => {
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
                fetch(`http://localhost:5000/post/${_id}`, {
                    method: 'DELETE'
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("Sub-category deleted:", data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        }).then(() => {
                            // reload the page
                            window.location.reload();
                        });
                    })
                    .catch(error => {
                        console.error("Error deleting sub-category:", error);
                    });
            }
        });
    };
    
   

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={image} alt="image" />
                                <div className="ps-3">
                                    <div className="text-base font-semibold pl-10">{title}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                {_id}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={handleDelete} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><RiDeleteBin6Fill /></button>
                            </td>
                        </tr>
        </>
    );
};

export default ActivePostInfo;