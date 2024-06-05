import { useEffect, useState } from "react";

const Form = () => {

    const [postData, setPostData] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/country")
            .then((response) => response.json())
            .then((data) => {
                setPostData(data);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/country")
            .then((response) => response.json())
            .then((data) => {
                setPostData(data);
            });
    }, []);

    const handleCountryFilter = (country) => {
        setSelectedCountry(country);
        setSelectedCity(""); // Reset selected city when changing country
    };

    const handleCityFilter = (city) => {
        setSelectedCity(city);
    };

    const postNow = (e) => {
        e.preventDefault();
        console.log("Post now");
    }


    return (
        <div>
            <form onSubmit={postNow} action="">
                    <div className="border border-sky-500 border-dashed py-5 px-2 my-5 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            <select
                                value={selectedCountry}
                                onChange={(e) => handleCountryFilter(e.target.value)}
                                className=" peer relative h-10 w-full mr-2 appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            >
                                <option value="">Select Country</option>
                                {postData.map((country) => (
                                    <option key={country.country} value={country.country}>{country.country}</option>
                                ))}
                            </select>

                            <select
                                value={selectedCity}
                                onChange={(e) => handleCityFilter(e.target.value)}
                                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            >
                                <option value="">Select City</option>
                                {postData
                                    .filter((country) => country.country === selectedCountry)
                                    .map((country) => (
                                        country.cities.map((city) => (
                                            <option key={city.city} value={city.city}>{city.city}</option>
                                        ))
                                    ))}
                            </select>
                            <select
                                value={selectedCity}
                                onChange={(e) => handleCityFilter(e.target.value)}
                                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            >
                                <option value="">Select City</option>
                                {postData
                                    .filter((country) => country.country === selectedCountry)
                                    .map((country) => (
                                        country.cities.map((city) => (
                                            <option key={city.city} value={city.city}>{city.city}</option>
                                        ))
                                    ))}
                            </select>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
            </form>
        </div>
    );
};

export default Form;