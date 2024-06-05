import { FaMoneyBillWave, FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Form from "./PostForm/Form";

const Post = () => {


    return (
        <div className="border border-sky-500 border-dashed py-10 px-10 my-5 w-full ">

            <div>
                <div className=" flex sm:flex-col lg:flex-row gap-5  justify-between p-6 border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl">
                    <h1 className="font-bold lg:text-2xl  flex items-center gap-5 "><FaWallet className="text-sky-500" /> <span className="hidden md:block">Current Balance :</span> <span className="text-sky-500">$ 00</span></h1>
                    <NavLink to="/dashboard/recharge" className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-400 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                        <FaMoneyBillWave className="text-[2rem]" />
                        <h1>Recharge</h1>
                    </NavLink>
                </div>
            </div>
            <div>
                <Form />
            </div>

        </div>
    );
};

export default Post;