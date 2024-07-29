import { FaPiedPiper } from "react-icons/fa";
import Address from "./Payment_Address/Address";

const Payment = () => {

    const addAddress = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const address = e.target.address.value;
        const crypto = { name, address };
        console.log(crypto);

        fetch('https://listing-web-server.up.railway.app/addAddress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(crypto)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Address added successfully');
                    e.target.reset();
                    window.location.reload();
                }
            })


    }

    return (
        <div>
            <section className=" border  border-dashed rounded-md w-full py-14">
                <div className="container px-6 m-auto">
                    <div className="">
                        <div className="col-span-4 lg:col-start-3 p-6 border border-dashed shadow-2xl  bg-sky-100 rounded-xl">
                            <h1 className="font-bold lg:text-2xl  flex items-center gap-5 "><FaPiedPiper
                                className="text-sky-500" /> Total Post : <span className="text-sky-500">00</span></h1>
                        </div>

                    </div>
                </div>
            </section><br />
            <section className=" border  border-dashed rounded-md w-full px-5 py-14">
                <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-400 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Payment Address</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Crypto name and address!</h3>
                        <div>
                            <section className=" ">
                                <div className="flex flex-col items-center justify-center px-6  mx-auto  lg:py-0">

                                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
                                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                            <form onSubmit={addAddress} className="space-y-4 md:space-y-6">
                                                <div className="relative my-6 md:w-60">
                                                    <select  id="name"  name="name"  required  className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus: focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"  >
                                                        <option value="btc">Bitcoin</option>
                                                        <option value="ltc">Litecoin</option>
                                                        <option value="trc20/usdt">USDT</option>
                                                    </select>
                                                    <label htmlFor="name" className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                                        Filter by option
                                                    </label>
                                                    <svg  xmlns="http://www.w3.org/2000/svg"  className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-sky-500 peer-disabled:cursor-not-allowed"  viewBox="0 0 20 20"  fill="currentColor"  aria-labelledby="title-04 description-04"  role="graphics-symbol" >
                                                        <title id="title-04">Arrow Icon</title>
                                                        <desc id="description-04">Arrow icon of the select list.</desc>
                                                        <path  fillRule="evenodd"  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"  clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Crypto Address</label>
                                                    <input type="text" name="address" id="address" placeholder="address" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                </div>

                                                <button type="submit" className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-400 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">Add!!</button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal.............. */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <Address />
            </section>

        </div>
    );
};

export default Payment;