import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuthContext from "../Context/useAuthContext";
import Swal from "sweetalert2";

const Login = () => {
    const [visible, setVisible] = useState(false);
    const showPassword = () => {
        setVisible(!visible);
    }

    const { loginUser, user, google } = useAuthContext();

    console.log(user, 'user');

     const Google = () => {
        console.log('click to hoise');
        google()
            .then((result) => {
                window.location.href = "/";
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }

    const loginData = e => {
        e.preventDefault();
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    text: 'Sign up successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                // ...
            })
            .catch(() => {
                Swal.fire({
                    title: 'Invalid email or password!',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                })
                // ..
            });
    }

    return (
        <div className="container px-4 mx-auto my-10">
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl text-green-600 font-extrabold">Sign in</h2>
                </div>
                <form action="" onSubmit={loginData} >
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold " htmlFor="">Email</label>
                        <input name="email" className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 text-green-600 border-[#1F2937] rounded" type="email" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
                        <div className=" flex   leading-6 border-2 border-[#1F2937] rounded ">
                            <input name='password' className="text-lg outline-none	 text-green-600 p-4 w-full border-0	 font-extrabold placeholder-[#1F2937]" type={visible ? 'text' : 'password'} id="" placeholder="**********" />
                            <div className="flex items-center px-4">
                                {
                                    visible ? <IoEye style={{ cursor: 'pointer' }} className="text-xl text-green-600" onClick={showPassword} /> : <IoMdEyeOff style={{ cursor: 'pointer' }} className="text-xl text-green-600" onClick={showPassword} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                        <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                            <label htmlFor="">
                                {/* <input type="checkbox" />
                                <span className="ml-1 font-extrabold">Remember me</span> */}
                            </label>
                        </div>
                        <div className="w-full text-green-600 lg:w-auto px-4"><Link to='/forgotPassword' className="inline-block font-extrabold hover:underline" href="#">Forgot your
                            password?</Link></div>
                    </div>
                    <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-green-500 hover:bg-[#1F2937] border-3 border-[#1F2937] shadow rounded transition duration-200">Sign in</button>
                    <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link to='/signUp' className="text-green-500 hover:underline"
                    >Sign up</Link></p>
                </form>
                <div className="">
                    <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                        <div className="h-px w-full bg-slate-200"></div>OR
                        <div className="h-px w-full bg-slate-200"></div>
                    </div>
                    <button onClick={Google}
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 92" fill="none"
                            className="h-[18px] w-[18px]">
                            <path
                                d="M90 47.1c0-3.1-.3-6.3-.8-9.3H45.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C85 72.8 90 61 90 47.1z"
                                fill="#4280ef"></path>
                            <path
                                d="M45.9 91.9c12.4 0 22.8-4.1 30.4-11.1L61.5 69.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L4.9 66.6c7.8 15.5 23.6 25.3 41 25.3z"
                                fill="#34a353"></path>
                            <path
                                d="M20.1 54.8c-1.9-5.7-1.9-11.9 0-17.6L4.9 25.4c-6.5 13-6.5 28.3 0 41.2l15.2-11.8z"
                                fill="#f6b704"></path>
                            <path
                                d="M45.9 18.3c6.5-.1 12.9 2.4 17.6 6.9L76.6 12C68.3 4.2 57.3 0 45.9.1c-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9z"
                                fill="#e54335"></path>
                        </svg>Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;