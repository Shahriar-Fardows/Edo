import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sponsored = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://listing-web-server.up.railway.app/sponsor')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);




    return (
        <div className="border border-sky-500 border-dashed py-10 px-10 ">
            <h1 className="text-center text-3xl text-sky-500 underline font-bold">SPONSORED WEBSITES</h1>

            <div className="flex flex-wrap justify-center py-12 gap-2">
                {
                    data.map(item => (
                        <div key={item._id} className="py-1">
                            
                            <Link to={item.company_url}  className="mr-3 mb-3 px-3 py-1 bg-sky-400 rounded cursor-pointer">
                            {/* className="mr-3 mb-3 px-3 py-1 bg-gray-200 rounded cursor-pointer" */}
                                <button className="text-white">
                                    {item.company_name}
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Sponsored;