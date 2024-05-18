import  { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const CountryData = () => {
    const [postData, setPostData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(""); // State to store selected country for filtering

    useEffect(() => {
        fetch("post.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPostData(data);
            });
    }, []);

    // Group data by country
    const groupedData = {};
    console.log(groupedData, "groupedData");
    postData.forEach((item) => {
        if (!groupedData[item.country]) {
            groupedData[item.country] = [];
        }
        groupedData[item.country].push(item.city);
    });

    // Function to handle country filter
    const handleCountryFilter = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div  className="border border-sky-500 border-dashed py-5 px-5 my-5 w-full">
        
            {/* Country filter */}
            <select value={selectedCountry} onChange={(e) => handleCountryFilter(e.target.value)} className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
                <option value="" className="text-lg ">Select Country</option>
                {Object.keys(groupedData).map((country) => (
                    <option key={country} value={country} className="text-lg ">{country}</option>
                ))}
            </select>

            {/* Render filtered or all countries */}
            {Object.keys(groupedData).map((country) => (
                (selectedCountry === "" || selectedCountry === country) && (
                    <div key={country} className="border border-sky-500 border-dashed  px-5 my-5 w-full">
                        <h2 className="text-xl  font-medium my-5 text-sky-500">{country}</h2>
                        <div className="flex flex-wrap">
                            {groupedData[country].map((city) => (
                                <Link key={city} to={`/allPost/${city}`} className="mr-3 mb-3 px-3 py-1 bg-gray-200 rounded cursor-pointer">{city}</Link>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

export default CountryData;
