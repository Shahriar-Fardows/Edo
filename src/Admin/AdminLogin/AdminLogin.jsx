import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLogin = () => {
    const navigate = useNavigate();


    const LoginAdmin = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        console.log(email, password);
        if (email === "admin@login.jsx" && password === "admin") {
            console.log("Admin Logged in");
            Swal.fire({
                text: 'welcome to your web site admin!',
                icon: 'success',
                confirmButtonText: 'Cool'
            }) 
            navigate("/web-admin/admin-dashboard"); 
        } 
        else {  
            Swal.fire({
                title: 'Invalid email or password!',
                icon: 'error',
                confirmButtonText: 'Try again'
            })
        }  
        
    }



    return (
        <form onSubmit={LoginAdmin} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            {/*  <!-- Body--> */}
            <div className="p-6">
                <header className="mb-4 text-center">
                    <h3 className="text-xl font-medium text-slate-700">Login Admin</h3>
                </header>
                <div className="flex flex-col space-y-8">
                    {/*      <!-- Input field --> */}
                    <div className="relative my-6">
                        <input
                            id="id-b03"
                            type="email"
                            name="id-b03"
                            placeholder="your name"
                            className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        />
                        <label
                            htmlFor="id-b03"
                            className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Your email
                        </label>
                        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                            <span>Type your email address</span>
                        </small>
                    </div>
                    {/*      <!-- Input field --> */}
                    <div className="relative my-6">
                        <input
                            id="id-b13"
                            type="password"
                            name="id-b13"
                            placeholder="your password"
                            className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        />
                        <label
                            htmlFor="id-b13"
                            className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Your password
                        </label>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                        </svg>
                        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                            <span>Input field with trailing icon</span>
                        </small>
                    </div>
                </div>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-6 ">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                    <span>Log in</span>
                </button>
            </div>
        </form>
    );
};

export default AdminLogin;