import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import useAuthContext from "../../Context/useAuthContext";


const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const { user, LogOut } = useAuthContext();
    const navLinks = <>

        <li role="none" className="flex items-stretch">
            <NavLink to='/'
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center active:text-sky-500 gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none lg:px-8"
            >
                <span>Home</span>
            </NavLink>
        </li>
        <li role="none" className="flex items-stretch">
            <NavLink to='/dashboard'
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 active:text-sky-500 transition-colors duration-300 hover:text-sky-600 focus:text-sky-600 focus:outline-none focus-visible:outline-none lg:px-8"
            >
                <span>Dashboard</span>
            </NavLink>
        </li>
        <li role="none" className="flex items-stretch">
            <NavLink to='/profile'
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center active:text-sky-500 gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:text-sky-600 focus:outline-none focus-visible:outline-none lg:px-8"
            >
                <span>Profile</span>
            </NavLink>
        </li>
        <li role="none" className="flex items-stretch">

        </li>

    </>

    return (
        <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
            <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                <nav
                    aria-label="main navigation"
                    className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                    role="navigation"
                >
                    {/*      <!-- Brand logo --> */}
                    <NavLink to="/"
                        id="WindUI"
                        aria-label="WindUI logo"
                        aria-current="page"
                        className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"

                    >
                        <svg
                            width="300"
                            height="300"
                            viewBox="0 0 300 300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 bg-sky-500"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
                                fill="rgba(255,255,255,.2)"
                            />
                        </svg>
                        Edo
                    </NavLink>
                    {/*      <!-- Mobile trigger --> */}
                    <button
                        className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                : ""
                            }
            `}
                        onClick={() => setIsToggleOpen(!isToggleOpen)}
                        aria-expanded={isToggleOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                            ></span>
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                            ></span>
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                            ></span>
                        </div>
                    </button>
                    {/*      <!-- Navigation links --> */}

                    {
                        user ? <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >

                            {navLinks}

                        </ul> : ''
                    }
                    {
                        user ? <div
                            className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0"
                        >
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img  src={user.photoURL ? user.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
                                    <li>
                                        <h1>
                                            {user?.email}
                                        </h1>
                                    </li>
                                    <li><h1 onClick={LogOut}>Logout</h1></li>
                                </ul>
                            </div>
                        </div> : <NavLink to='/login' className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                            <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-400 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                                <FaRegUserCircle className="text-[2rem]" />
                                <h1>Login</h1>
                            </button>
                        </NavLink>
                    }

                </nav>
            </div>
        </header>
    );
};

export default Navbar;