import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryData = () => {
    const [postData, setPostData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        fetch("https://listing-web-server.up.railway.app/country")
            .then((response) => response.json())
            .then((data) => {
                // Sort the data to ensure "United States" is first
                const sortedData = data.sort((a, b) => {
                    if (a.country === "United States") return -1;
                    if (b.country === "United States") return 1;
                    return a.country.localeCompare(b.country);
                });
                setPostData(sortedData);
            });
    }, []);

    const handleCountryFilter = (country) => {
        setSelectedCountry(country);
        setSelectedCity(""); // Reset selected city when changing country
    };

    const handleCityFilter = (city) => {
        setSelectedCity(city);
    };

    return (
        <div className="border-dashed py-5 px-2 my-5 w-full">
            <h1 className="text-2xl my-5">Get Your Country and city</h1>
            <div className="flex">
                <select
                    value={selectedCountry}
                    onChange={(e) => handleCountryFilter(e.target.value)}
                    className="peer relative h-10 w-1/2 mr-2 appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus: focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                >
                    <option value=''>Select Country</option>
                    {postData.map((country) => (
                        <option key={country.country} value={country.country}>{country.country}</option>
                    ))}
                </select>

                <select
                    value={selectedCity}
                    onChange={(e) => handleCityFilter(e.target.value)}
                    className="peer relative h-10 w-1/2 appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus: focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
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

            {postData.map((country) => (
                (selectedCountry === "" || selectedCountry === country.country) && (
                    <details key={country._id} className="border border-dashed px-4 my-5 w-full" open>
                        <summary className="relative flex items-center cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-emerald-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                aria-labelledby="title-ac27 desc-ac27"
                            >
                                <title id="title-ac27">Leading icon</title>
                                <desc id="desc-ac27">Icon that describes the summary</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                                />
                            </svg>
                            <h2 className="text-xl font-medium my-5 text-sky-500 ">{country.country}</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-0 top-8 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                aria-labelledby="title-ac28 desc-ac28"
                            >
                                <title id="title-ac28">Open icon</title>
                                <desc id="desc-ac28">
                                    icon that represents the state of the summary
                                </desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </summary>

                        {/* the style add on this codes  */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {country.cities
                                .filter((city) => selectedCity === "" || selectedCity === city.city)
                                .map((city) => (
                                    <div key={city.city} className="  max-w-full border-gray-500 w-full border-dashed px-4 py-4 m-2">
                                        <h3 className="text-lg font-medium">{city.city}</h3>
                                        <hr />
                                        <br />
                                        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-[#b4ae57] px-5">
                                            {city.subcities.map((subcity) => (
                                                <li key={subcity} className=" flex justify-between items-center text-[#c0b954] hover:bg-sky-100 transition-all">
                                                    <Link to={`/${country.country}/${city.city}/${subcity}`}>{subcity}</Link>
                                                    <span></span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>



                    </details>
                )
            ))}
        </div>
    );
};

export default CountryData;
