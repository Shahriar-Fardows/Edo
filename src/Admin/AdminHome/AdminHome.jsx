import { BsPostcardHeartFill } from "react-icons/bs";
import { FaPiedPiper } from "react-icons/fa";
import PendingPost from "../PandingPost/PendingPost";

const AdminHome = () => {
    return (
        <div className=" py-20  lg:py-28 ">
            <section className=" border border-sky-500 border-dashed rounded-md w-full py-14">
                <div className="container px-6 m-auto">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-4 lg:col-start-3 p-6 border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl">
                            <h1 className="font-bold lg:text-2xl  flex items-center gap-5 "><FaPiedPiper className="text-sky-500" /> Total Post : <span className="text-sky-500">$ 00</span></h1>
                        </div>
                        <div className="col-span-4 p-6 border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl">
                            <h1 className="font-bold   lg:text-2xl  flex items-center  gap-5"><BsPostcardHeartFill className="text-sky-500" /> Total Pending Post : <span className="text-sky-500"> 00</span></h1>
                        </div>
                    </div>
                </div>
            </section><br />
           <PendingPost/>
        </div>
    );
};

export default AdminHome;