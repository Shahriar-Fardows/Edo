import Swal from "sweetalert2";

const Country = () => {

    const ApiUpdate = (e) => {
        e.preventDefault();
        const country = e.target[0].value;
        const city = e.target[1].value;
        const subcity = e.target[2].value;
        const data = {
            name: country,
            cities: [
                {
                    name: city,
                    subcities: [subcity]
                }
            ]
        };
    
        fetch("http://localhost:5000/country", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                text: 'Data added to the database!',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
        });
    };
    




    return (
        <div className="lg:w-[30%] border border-sky-500 p-10">
            <h1 className="text-2xl font-bold text-center">Update Country Api</h1><br />
            <form className=" " onSubmit={ApiUpdate}>
                <div className="relative  md:w-full">
                    <select id="id-04" name="id-04" required className="relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-sky-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
                        <option value=" United States"> United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Latin America">Latin America</option>
                        <option value="Africa">Africa</option>
                        <option value="Australia and United Kingdom">Australia and United Kingdom</option>
                    </select>
                    <label htmlFor="id-04" className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                        Select an option
                    </label>
                    <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-sky-500 peer-disabled:cursor-not-allowed" viewBox="0 0 20 20" fill="currentColor" aria-labelledby="title-04 description-04" role="graphics-symbol">
                        <title id="title-04">Arrow Icon</title>
                        <desc id="description-04">Arrow icon of the select list.</desc>
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div><br />
                <div className="relative">
                    <input id="id-01" type="text" name="id-01" placeholder="your name" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                    <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                        Add City name
                    </label>
                </div><br />
                <div className="relative">
                    <input id="id-01" type="text" name="id-01" placeholder="your name" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                    <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                        Add SubCity name
                    </label>
                </div><br />

                <button type="submit" className="bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded">Add</button>
            </form>
        </div>
    );
};

export default Country;