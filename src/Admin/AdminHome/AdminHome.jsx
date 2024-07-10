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
                            <h1 className="font-bold lg:text-2xl  flex items-center gap-5 "><FaPiedPiper className="text-sky-500" /> Total Post : <span className="text-sky-500">00</span></h1>
                        </div>
                        <div className="col-span-4 p-6 border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl">
                            <h1 className="font-bold   lg:text-2xl  flex items-center  gap-5"><BsPostcardHeartFill className="text-sky-500" /> Total Pending Post : <span className="text-sky-500"> 00</span></h1>
                        </div>
                    </div>
                </div>
            </section><br />

            <div className="relative my-6 md:w-60">
                <select
                    id="id-04"
                    name="id-04"
                    required
                    className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                >
                    <option value="1">Total Post</option>
                    <option value="2">Active Post</option>
                    <option value="3">Pending Post</option>
                </select>
                <label
                    htmlFor="id-04"
                    className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                    Filter by option
                </label>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-labelledby="title-04 description-04"
                    role="graphics-symbol"
                >
                    <title id="title-04">Arrow Icon</title>
                    <desc id="description-04">Arrow icon of the select list.</desc>
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>


            <PendingPost />
        </div>
    );
};

export default AdminHome;