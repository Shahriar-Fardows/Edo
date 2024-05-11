import Swal from "sweetalert2";
import useAuthContext from "../Context/useAuthContext";

const ForgotPassword = () => {

    const {forgotPassword } = useAuthContext();
    

    const ResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
        forgotPassword(email)
            .then(() => {
                Swal.fire({
                    text: 'Reset Password Email Sent!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                
            })
            .catch(() => {
                Swal.fire({
                    title: 'Error in sending email!',
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                })
                
            });
        
    };
    return (
        <div className=" my-56 mx-4  flex items-center justify-center">
            <div className="bg-white shadow-md rounded px-8  pb-8 mb-4 max-w-md w-full">
                <h1 className="text-center text-green-500 text-2xl font-bold mb-6">Forgot Password</h1>
                <form onSubmit={ResetPassword}>
                    <div className="mb-4">
                        <label className="block text-green-700 font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;