import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const CountryDatas = () => {
    const [postData, setPostData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(""); // State to store selected country for filtering

    useEffect(() => {
        fetch("http://localhost:5000/country")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPostData(data);
            });
    }, []);


    // Function to handle country filter
    const handleCountryFilter = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div className="border border-sky-500 border-dashed py-5 px-5 my-5 w-full">
            {/* Country filter */}
            <select
                value={selectedCountry}
                onChange={(e) => handleCountryFilter(e.target.value)}
                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
                <option value="" className="text-lg">Select Country</option>
                {postData.map((country) => (
                    <option key={country.name} value={country.name} className="text-lg">{country.name}</option>
                ))}
            </select>

            {/* Render filtered or all countries */}
            {postData.map((country) => (
                (selectedCountry === "" || selectedCountry === country.name) && (
                    <div key={country.name} className="border border-sky-500 border-dashed px-5 my-5 w-full">
                        <h2 className="text-xl font-medium my-5 text-sky-500">{country.name}</h2>
                        <div className="flex flex-wrap">
                            {country.cities.map((city) => (
                                <div key={city.name} className="border border-gray-500 w-[30%] border-dashed px-5 py-4 m-2 ">
                                    <h3 className="text-lg font-medium">{city.name}</h3><hr /><br />
                                    <ul className=" grid grid-cols-2 gap-4 list-disc list-inside text-sky-500 px-5">
                                        {city.subcities.map((subcity) => (
                                            <li key={subcity} className="hover:text-sky-700 hover:bg-sky-100 transition-all">
                                                <Link to={`/${country.name}/${city.name}/${subcity}`}>{subcity}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

export default CountryDatas;
