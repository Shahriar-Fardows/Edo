import { FaWallet, FaMoneyBillWave } from "react-icons/fa";
import { BsPostcardHeartFill } from "react-icons/bs";
import { TbLibraryPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import ActivePost from "./Post/ActivePost";


const Dashboard = () => {



    return (
        <div className="mx-5 my-10">
            <h1 className="text-3xl my-5">Welcome to Dashboard</h1>
            <div className=" flex flex-row-reverse py-5 gap-6 ">
                <NavLink to="/dashboard/post" className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-400 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                    <TbLibraryPlus className="text-[2rem]" />
                    <h1>Post</h1>

                </NavLink>
                <NavLink to="/dashboard/recharge" className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-400 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                    <FaMoneyBillWave className="text-[2rem]" />
                    <h1>Recharge</h1>
                </NavLink>
            </div>
            <section className=" border border-sky-500 border-dashed rounded-md w-full py-14">
                <div className="container px-6 m-auto">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-4 p-6 border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl">
                            <h1 className="font-bold lg:text-2xl  flex items-center gap-5 "><FaWallet className="text-sky-500" /> Current Balance : <span className="text-sky-500">$ 00</span></h1>
                        </div>
                        <div className="col-span-4 p-6 border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl">
                            <h1 className="font-bold   lg:text-2xl  flex items-center  gap-5"><BsPostcardHeartFill className="text-sky-500" /> Total Pending Post : <span className="text-sky-500"> 00</span></h1>
                        </div>
                        <div className="col-span-4 p-6 border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl ">
                            <h1 className="font-bold lg:text-2xl  flex items-center  gap-5"><BsPostcardHeartFill className="text-sky-500" /> Total Active Post : <span className="text-sky-500"> 00</span></h1>
                        </div>

                    </div>
                </div>
            </section>
            <div>
                <h1 className="text-3xl my-5">Post</h1>
                <ActivePost />
            </div>
        </div>
    );
};

export default Dashboard;