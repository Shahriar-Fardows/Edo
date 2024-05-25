import Swal from "sweetalert2";

const Category = () => {

    const ApiUpdate = (e) => {
        e.preventDefault();

        const category = e.target.category.value;

        if (category === "") {
            Swal.fire({
                text: 'Please fill the form!',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        } else {

            fetch("http://localhost:5000/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ category }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    Swal.fire({
                        text: 'Data added to the database!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        window.location.reload();
                    });
                }
                );
        }
    };






    return (
        <div className="lg:w-[30%] border border-sky-500 p-10">
            <h1 className="text-2xl font-bold text-center">Update category Api</h1><br />
            <form className=" " onSubmit={ApiUpdate}>

                <div className="relative">
                    <input id="id-01" type="text" name="category" placeholder="your name" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                    <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                        Add Category name
                    </label>
                </div><br />

                <button type="submit" className="bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded">Add</button>
            </form>
        </div>
    );
};

export default Category;