import { FaRegUserCircle } from "react-icons/fa";
import useAuthContext from "../../Context/useAuthContext";

const ProfileInfo = () => {
    const { user } = useAuthContext();
    return (
        <div>

            <div className="py-10 border border-sky-500 border-dashed px-10 my-10 ">
                <h1 className="text-3xl text-sky-600 ">Profile Information </h1> <br /><br />

                <div className="grid grid-cols-1 px-0 md:px-20 md:grid-cols-2">
                    <div className="pb-4  ">
                        {
                            user ?
                                <div className="border-2 border-sky-500 rounded-md w-24 ">
                                    <img className="rounded-md p-1" src={user.photoURL ? user.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                                </div>
                                :
                                <FaRegUserCircle className="text-[2rem]" />

                        }

                    </div>
                    <div>
                        {user ? (
                            <div>
                                <h2 className="text-xl text-sky-600">Name: {user ? user.displayName : 'No Name'}</h2>
                                <br />

                            </div>
                        ) : (
                            <h2 className="text-xl text-sky-600">Uid: {user ? user.metadata.createdAt : 'No Name'}</h2>
                        )}

                        <h2 className="text-xl text-sky-600">Email: {user ? user?.email : 'No Email'}</h2> <br />
                        <h2 className="text-xl text-sky-600">Last Sign In Time: {user ? user.metadata.lastSignInTime : 'No Email'}</h2>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProfileInfo;