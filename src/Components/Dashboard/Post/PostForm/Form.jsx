import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthContext from "../../../../Context/useAuthContext";

const Form = () => {

    const {user} = useAuthContext();
    const [postData, setPostData] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState('');
    const [selectSubCategory, setSelectSubCategory] = useState('');
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedSubCity, setSelectedSubCity] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/country")
            .then((response) => response.json())
            .then((data) => {
                setPostData(data);
            });
    }, []);
    useEffect(() => {
        fetch("http://localhost:5000/category")
            .then((response) => response.json())
            .then((data) => {
                setCategory(data);
            });
    }, []);

    // all country and city sub-city filter

    const handleCountryFilter = (country) => {
        setSelectedCountry(country);
        setSelectedCity(""); // Reset selected city when changing country

    };

    const handleCityFilter = (city) => {
        setSelectedCity(city);
        setSelectedSubCity(""); // Reset selected sub city when changing city
    };

    const handleSubCityFilter = (subcity) => {
        setSelectedSubCity(subcity);
    };

    // all category and sub-category filter

    const handleCategoryFilter = (category) => {
        setSelectCategory(category);
        setSelectSubCategory(""); // Reset selected city when changing country

    };

    const handleSubCategoryFilter = (city) => {
        setSelectSubCategory(city);

    };

    const postNow = (e) => {
        e.preventDefault();
        const fromData = new FormData(e.target);
        const country = fromData.get("country");
        const city = fromData.get("city");
        const sub_city = fromData.get("subcity");
        const title = fromData.get("title");
        const category = fromData.get("category");
        const subcategory = fromData.get("subcategory");
        const bodyText = fromData.get("bodyText");
        const email = fromData.get("email");
        const number = fromData.get("number");
        const featuredPackage = fromData.get("featuredPackage");
        const extendPackage = fromData.get("extendPackage");
        const image_upload = fromData.get("image_upload");

        const data = new FormData();
        data.append('image', image_upload);

        fetch('https://api.imgbb.com/1/upload?key=b9d801dc23f129666ab26bcec55288e1', {
            method: 'POST',
            body: data,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const post = {
                    country,
                    city,
                    sub_city,
                    title,
                    category,
                    subcategory,
                    bodyText,
                    email,
                    PostBy: user.email,
                    number,
                    featuredPackage,
                    extendPackage,
                    image: data.data.url,
                };


                fetch("http://localhost:5000/post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(post),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Post added:", data);
                        Swal.fire({
                            text: 'You Post successfully!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        const form = e.target;
                        form.reset()
                    })
                    .catch((error) => {
                        console.error("Error adding post:", error);
                    });
            })



    }



    // navigate("/dashboard");

    const cancel = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Cancel this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Cancel!",
                    text: "Your Post has been Cancel.",
                    icon: "success"
                });
                navigate("/dashboard");
            }
        });


    };


    return (
        <div>
            <form onSubmit={postNow} className="py-10" action="">
                <div className="lg:border lg:border-sky-500 lg:border-dashed py-5 lg:px-5 lg:my-5 w-full">

                    <div>
                        <label htmlFor="" className="text-2xl">Select Country, City and Sub-city</label><br /><br />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            <select
                                name="country"
                                value={selectedCountry}
                                onChange={(e) => handleCountryFilter(e.target.value)}
                                className="peer relative h-10 w-full mr-2 appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                required
                            >
                                <option value="">Select Country</option>
                                {postData.map((country) => (
                                    <option key={country.country} value={country.country}>{country.country}</option>
                                ))}
                            </select>

                            <select
                                name="city"
                                value={selectedCity}
                                onChange={(e) => handleCityFilter(e.target.value)}
                                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required
                            >
                                <option value="">Select City</option>
                                {postData
                                    .filter((country) => country.country === selectedCountry)
                                    .flatMap((country) =>
                                        country.cities.map((city) => (
                                            <option key={city.city} value={city.city}>{city.city}</option>
                                        ))
                                    )}
                            </select>

                            <select
                                name="subcity"
                                value={selectedSubCity}
                                onChange={(e) => handleSubCityFilter(e.target.value)}
                                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required
                            >
                                <option value="">Select Subcity</option>
                                {postData
                                    .filter((country) => country.country === selectedCountry)
                                    .flatMap((country) =>
                                        country.cities
                                            .filter((city) => city.city === selectedCity)
                                            .flatMap((city) =>
                                                city.subcities.map((subcity) => (
                                                    <option key={subcity} value={subcity}>{subcity}</option>
                                                ))
                                            )
                                    )}
                            </select>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <label htmlFor="" className="text-2xl">Select Category and Sub-category</label><br /><br />

                        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
                            <div className="relative my-6">
                                <input id="id-01" type="text" name="title" placeholder="your name" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-sky-500 invalid:text-sky-500 focus:border-sky-500 focus:outline-none invalid:focus:border-sky-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required />
                                <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-sky-500 peer-required:after:content-['\00a0*'] peer-invalid:text-sky-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-sky-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                    Your Title
                                </label>
                            </div>
                            <select
                                name="category"
                                value={selectCategory}
                                onChange={(e) => handleCategoryFilter(e.target.value)}
                                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required
                            >
                                <option value="">Select Category</option>
                                {category.map((category) => (
                                    <option key={category.category} value={category.category}>{category.category}</option>
                                ))}
                            </select>

                            <select
                                name="subcategory"
                                value={selectSubCategory}
                                onChange={(e) => handleSubCategoryFilter(e.target.value)}
                                className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required
                            >
                                <option value="">Select Sub-Category</option>
                                {category
                                    .filter((category) => category.category === selectCategory)
                                    .flatMap((category) =>
                                        category.sub_categories.map((sub_cat) => (
                                            <option key={sub_cat} value={sub_cat}>{sub_cat}</option>
                                        ))
                                    )}
                            </select>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <label htmlFor="" className="text-2xl">Posting Body message</label><br /><br />
                        <div className="relative">
                            <textarea
                                id="id-01"
                                type="text"
                                name="bodyText"
                                placeholder="Posting Body message"
                                rows="3"
                                className="peer h-64 relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-sky-500 invalid:text-sky-500 focus:border-sky-500 focus:outline-none invalid:focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required
                            ></textarea>
                            <label
                                htmlFor="id-01"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-sky-500 peer-required:after:content-['\00a0*'] peer-invalid:text-sky-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-sky-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Write your message
                            </label>
                        </div>
                    </div>
                    <br /><br />
                    <div className="relative inline-flex items-center w-full gap-2 my-6 text-sm border rounded border-slate-200 text-slate-500">
                        <input id="file-upload" name="image_upload" type="file" className="peer order-2 [&::file-selector-button]:hidden" multiple />
                        <label htmlFor="file-upload" className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded cursor-pointer whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none peer-disabled:cursor-not-allowed peer-disabled:border-emerald-300 peer-disabled:bg-emerald-300"> Upload a file </label>
                    </div>
                    <br /><br />
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="relative my-6">
                                <input id="id-01" type="text" name="email" placeholder="your name" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-sky-500 invalid:text-sky-500 focus:border-sky-500 focus:outline-none invalid:focus:border-sky-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required />
                                <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-sky-500 peer-required:after:content-['\00a0*'] peer-invalid:text-sky-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-sky-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                    Your Email
                                </label>
                            </div>
                            <div className="relative my-6">
                                <input id="id-01" type="number" name="number" placeholder="your name" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-sky-500 invalid:text-sky-500 focus:border-sky-500 focus:outline-none invalid:focus:border-sky-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required />
                                <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-sky-500 peer-required:after:content-['\00a0*'] peer-invalid:text-sky-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-sky-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                    Your Number
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-2xl">Promote your ad</label><br /><br />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div>
                                <h3 className="text-lg font-bold mb-2">Featured Ad</h3>
                                <hr />
                                <p className="text-gray-600 mb-4">
                                    Featured ads are placed top-most in each category and are shown highlighted. Select the appropriate option from below if you want to make this a featured ad.
                                </p>
                                <select
                                    name="featuredPackage"
                                    className="peer relative h-10 w-full mr-2 appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" required
                                >
                                    <option value="">Select Country</option>
                                    {postData.map((country) => (
                                        <option key={country.country} value={country.country}>{country.country}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Extended Ad</h3>
                                <hr />
                                <p className="text-gray-600 mb-4">
                                    Want to have your ad running longer? Consider buying one of the following promotions.
                                </p>
                                <select
                                    name="extendPackage"
                                    className="peer relative h-10 w-full mr-2 appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                    required
                                >
                                    <option value="">Select Country</option>
                                    {postData.map((country) => (
                                        <option key={country.country} value={country.country}>{country.country}</option>
                                    ))}
                                </select>

                            </div>
                        </div><br /><br />
                        <div className="bg-gray-100 p-4 rounded-md">
                            <p className="text-green-600">
                                You will be charged <span className="font-bold">$ 0.05</span> for making a post to this section.
                            </p>
                            <p className="text-green-600">
                                This Ad will be displayed for <span className="font-bold">15 Days</span>. Buy any
                                <span className="font-bold"> Extended Package</span> or <span className="font-bold">Featured Plan</span>
                                from below to display your ad longer.
                            </p>
                        </div>
                    </div>
                    <br /><br />
                </div>
                <button type='submit' className="bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded">Add Post</button>
                <button type="text" onClick={cancel} className="bg-red-500 hover:bg-red-400 mx-3 text-white py-2 px-4 rounded">Cancel</button>
            </form>
        </div>
    );
};

export default Form;
