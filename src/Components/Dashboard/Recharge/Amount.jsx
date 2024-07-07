import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

const Amount = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [currentAddress, setCurrentAddress] = useState({});
  const [paymentAddress, setPaymentAddress] = useState('');
  console.log(paymentAddress, 'paymentAddress');
  const [copySuccess, setCopySuccess] = useState(false);
  // const [amount, setAmount] = useState('');
  // const [address, setAddress] = useState('');
  // const [loading, setLoading] = useState(false);
  const [paymentResponse, setPaymentResponse] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/address`)
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data);
      })
      .catch((error) => console.error("Error fetching addresses:", error));
  }, []);

  const handleSubmit = (e) => {
    handlePayment();
    e.preventDefault();
    if (selectedOption) {
      const selectedAddress = addresses.find((address) => address.name === selectedOption);
      setCurrentAddress(selectedAddress || {});
      document.getElementById('my_modal_1').showModal();
      setPaymentAddress(selectedAddress.address);
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCopy = (e) => {
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset copy success after 2 seconds
    navigator.clipboard.writeText(e);
  };

  const handlePayment = async () => {

    const datas = {
      name: currentAddress.name,
      main_address: paymentAddress
    }

    console.log(datas);

    console.log(paymentResponse, 'paymentResponse.,............................');

    try {
      const query = new URLSearchParams({
        callback: 'http://localhost:5000/history', // Replace with your callback URL
        address: currentAddress.address,
        pending: '0',
        confirmations: '1',
        email: 'user@example.com', // Replace with customer's email
        post: '0',
        json: '0',
        priority: 'default',
        multi_token: '0',
        convert: '1'
      }).toString();

      const ticker = currentAddress.name; // Replace with the cryptocurrency ticker you want to use
      const response = await fetch(`https://api.cryptapi.io/${ticker}/create/?${query}`);

      console.log(response, 'response');

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      setPaymentResponse(data);
    } catch (error) {
      console.error('Error making payment:', error);
      setPaymentResponse(`Error: ${error.message}`);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="border border-sky-500 border-dashed rounded-md w-full py-14 px-10">
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <h1>Select Your Payment Option !!</h1>
        <div className="my-6 md:w-60 lg:w-[30vw]">
          <select
            id="name"
            name="name"
            required
            className="text-2xl peer relative h-16 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-slate-500 outline-none transition-all autofill:bg-white focus:border-sky-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            onChange={handleSelectChange}
          >
            <option value="">Select option</option>
            <option value="btc">Bitcoin</option>
            <option value="ltc">Litecoin</option>
            <option value="trc20/usdt">USDT</option>
          </select>
          <label
            htmlFor="name"
            className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
          >
            Select Payment by option
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-sky-500 peer-disabled:cursor-not-allowed"
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

        <button type="submit" className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-400 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
        >
          Recharge Now !!
        </button>
      </form>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box  max-w-[70rem]">
          <h3 className="font-bold text-base ">You selected ({currentAddress.name})</h3>
          <h3 className="font-bold text-2xl text-sky-500 mb-5">Send only {currentAddress.name} to this address!!!</h3>
          <hr />
          <div>
            <div>

            </div>
            <div>
              {currentAddress && currentAddress.address && (
                <div className=" p-4 rounded-md inline-block">
                  <div className="flex items-center border  rounded-md border-sky-500 p-2 justify-center space-x-2 mt-4">
                    <h1 className="font-bold text-xl   ">{paymentResponse.address_in}</h1>
                    <CopyToClipboard text={paymentResponse.address_in} onCopy={handleCopy}>
                      <button className="text-sky-500 hover:text-sky-700">
                        <FaCopy size={20} />
                      </button>
                    </CopyToClipboard>
                  </div>
                  {copySuccess && <p className="text-green-500 mt-2">Copied to clipboard!</p>}
                </div>
              )}
            </div>
          </div>
          <hr />
          <div>

          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>


    </div>
  );
};

export default Amount;
