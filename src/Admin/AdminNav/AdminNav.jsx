import { useEffect, useState } from "react";
import { MdOutlinePayments } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [totalUser, setTotalUser] = useState([]);

    console.log(totalUser);

    useEffect(() => {
        fetch("https://listing-web-server.up.railway.app/total-user")
            .then((res) => res.json())
            .then((data) => setTotalUser(data));
    }, []);


    const navItems = <>

        <li className="px-3">
            <NavLink
                to='/web-admin/admin-dashboard'

                className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
            >
                <div className="flex w-6 items-center self-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-label="Dashboard icon"
                        role="graphics-symbol"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        />
                    </svg>
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                </div>
            </NavLink>
        </li>

        <li className="px-3">
            <NavLink
                to='api-update'
                href="#"
                className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
            >
                <div className="flex w-6 items-center self-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-label="Dashboard icon"
                        role="graphics-symbol"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                    </svg>
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Update Api
                </div>
            </NavLink>
        </li>
        <li className="px-3">
            <NavLink
                to='total-user'
                className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
            >
                <div className="flex w-6 items-center self-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-label="Dashboard icon"
                        role="graphics-symbol"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                        />
                    </svg>
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Total User
                </div>
                <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                    {totalUser.length}<span className="sr-only"> new notifications</span>
                </span>
            </NavLink>
        </li>
        <li className="px-3">
            <NavLink
                to='payment'
                className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
            >
                <div className="flex w-6 items-center self-center">
                    <MdOutlinePayments className="h-6 w-6" />
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Total Payments
                </div>
               
            </NavLink>
        </li>

        <li className="px-3">
            <a
                href="#"
                className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-500 focus:bg-sky-50 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-500 "
            >
                <div className="flex w-6 items-center self-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-label="Dashboard icon"
                        role="graphics-symbol"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                    </svg>
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Notifications
                </div>
            </a>
        </li>

    </>

    return (
        <>
            <button
                title="Side navigation"
                type="button"
                className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${isSideNavOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                    }`}
                aria-haspopup="menu"
                aria-label="Side navigation"
                aria-expanded={isSideNavOpen ? " true" : "false"}
                aria-controls="nav-menu-5"
                onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
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

            {/*  <!-- Side Navigation --> */}
            <aside
                id="nav-menu-5"
                aria-label="Side navigation"
                className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${isSideNavOpen ? "translate-x-0" : " -translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
                    <div className="shrink-0">
                        <a
                            href="#"
                            className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <img
                                src="https://i.pravatar.cc/40?img=7"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-sky-500 p-1 text-sm text-white">
                                <span className="sr-only"> online </span>
                            </span>
                        </a>
                    </div>
                    <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
                        <h4 className="w-full truncate text-base text-slate-700">
                            admin
                        </h4>

                    </div>
                </div>
                <nav
                    aria-label="side navigation"
                    className="flex-1 divide-y divide-slate-100 overflow-auto"
                >
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            {navItems}
                        </ul>
                    </div>

                </nav>

                <footer className="border-t border-slate-200 p-3">
                    <NavLink
                        to='/web-admin'
                        className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-sky-500 "
                    >
                        <div className="flex items-center self-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                                aria-label="Dashboard icon"
                                role="graphics-symbol"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
                            Logout
                        </div>
                    </NavLink>
                </footer>
            </aside>

            {/*  <!-- Backdrop --> */}
            <div
                className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"
                    }`}
                onClick={() => setIsSideNavOpen(false)}
            ></div>
        </>
    );
};

export default AdminNav;