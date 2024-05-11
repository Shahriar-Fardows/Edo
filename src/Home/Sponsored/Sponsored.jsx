import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sponsored = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('sponsored.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, []);




    return (
        <div className="border border-sky-500 border-dashed py-10 px-10 ">
            <h1 className="text-center text-3xl text-sky-500 underline font-bold	">SPONSORED WEBSITES</h1>

            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-5 py-12 gap-2">
                {
                    data.map(item => (
                        <div key={item.id} className="py-1">
                            <Link to={item.company_url} className="text-sky-500 underline">
                                <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-600 focus:bg-sky-200 focus:text-sky-700 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-100 disabled:text-sky-400 disabled:shadow-none">
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