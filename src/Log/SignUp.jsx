import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthContext from "../Context/useAuthContext";

const SignUp = () => {
    const [visible, setVisible] = useState(false);

    const { user, createUser,  } = useAuthContext();
    console.log(user, 'user');


    const showPassword = () => {
        setVisible(!visible);
    }

    // const Google = () => {
    //     google()
    //         .then((result) => {
    //             // post email or password on data base 
    //             fetch('https://listing-web-server.up.railway.app/email', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(user)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data)
    //                 })

    //             window.location.href = "/";
    //             console.log(result, 'result');
    //         }).catch((error) => {
    //             const errorMessage = error.message;
    //             console.log(errorMessage)

    //         });
    // }


    const signUpData = e => {
        e.preventDefault();
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {
            email: email,
            password: password
        }

        // post email or password on data base 
        fetch('https://listing-web-server.up.railway.app/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })



        if (password.length < 6 || password.length > 32) {
            Swal.fire({
                title: 'Password has to be between 6 and 32 characters!',
                text: '',
                icon: 'error',
                confirmButtonText: 'Try again'
            })
        } else {
            createUser(email, password)
                .then(() => {
                    Swal.fire({
                        text: 'Sign up successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                })
                .catch(() => {
                    Swal.fire({
                        title: ' try agin!',
                        text: '',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    })
                });
        }

    }


    return (
        <div className="container px-4 mx-auto my-10">
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl text-sky-500 font-extrabold">Sign up</h2>
                </div>
                <form action="" onSubmit={signUpData} >
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Email</label>
                        <input className="inline-block w-full text-sky-500 p-4 leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded" type="email" name='email' placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
                        <div className=" flex   leading-6 border-2 border-[#1F2937] rounded ">
                            <input className="text-lg outline-none	 p-4 w-full border-0	text-sky-500 font-extrabold placeholder-[#1F2937]" type={visible ? 'text' : 'password'} name="password" id="" placeholder="**********" />
                            <div className="flex items-center px-4">
                                {
                                    visible ? <IoEye style={{ cursor: 'pointer' }} className="text-xl text-sky-500" onClick={showPassword} /> : <IoMdEyeOff style={{ cursor: 'pointer' }} className="text-xl text-sky-500" onClick={showPassword} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-6 items-center text-center justify-between">
                        <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                            <p>By creating an account, you are agreeing to our privacy policy and terms</p>
                        </div>
                        <div className="w-full lg:w-auto px-4"></div>
                    </div>
                    <div >
                        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold  hover:bg-[#1F2937] border-3 border-[#1F2937] shadow rounded transition duration-200 bg-sky-500">Sign up</button>
                    </div>
                    <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link to='/login' className="text-sky-500 hover:underline"
                    >Sign in</Link></p>
                </form>
                {/* <div className="">
                    <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                        <div className="h-px w-full bg-slate-200"></div>OR
                        <div className="h-px w-full bg-slate-200"></div>
                    </div>
                    <button
                        onClick={Google}
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
                </div> */}
            </div>
        </div>
    );
};

export default SignUp;