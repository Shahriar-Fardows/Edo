import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Address = () => {
  const [addressList, setAddressList] = useState([]);
  console.log(addressList);

  // get the address list

  useEffect(() => {
    fetch("http://localhost:5000/address")
      .then((response) => response.json())
      .then((data) => {
        setAddressList(data);
      });
  }, []);


 
  // delete the address by id 

  const deleteAddress = (id) => {

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
        fetch(`http://localhost:5000/address/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const newCategoryList = addressList.filter((category) => category._id !== id);
            setAddressList(newCategoryList);
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
    <div className="py-5">
      <h1 className="text-2xl font-bold text-center">Crypto Payment Address List</h1><br />
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200" cellSpacing="0">
          <thead>
            <tr>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-slate-700 bg-slate-100">No</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-slate-700 bg-slate-100">Crypto Name</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-slate-700 bg-slate-100">Crypto Address</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-slate-700 bg-slate-100">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              addressList.map((category, index) => (
                <tr key={category._id} className="border-t border-l first:border-l-0 border-slate-200 text-slate-500">
                  <td className="h-12 px-6 text-sm">{index + 1}</td>
                  <td className="h-12 px-6 text-sm">{category.name}</td>
                  <td className="h-12 px-6 text-sm">{category.address}</td>
                  <td className="h-12 px-6 text-sm">
                    <button onClick={() => deleteAddress(category._id)} className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>


      </div>
    </div>
  );
};

export default Address;