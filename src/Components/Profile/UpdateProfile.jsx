
const UpdateProfile = () => {

    const profileUpdate = (e) => {
        e.preventDefault();
        console.log("Profile Updated");
    }


    return (
        <div className="py-10 border border-sky-500 border-dashed px-10 my-10 ">
            <h1 className="text-3xl text-sky-600 ">Profile Update </h1>
            <div className="px-0 md:px-20 py-10">
                <form onSubmit={profileUpdate}>
                    <div>
                        <label className="text-xl  text-sky-600 ">Update Your Image :</label> <br /><br />
                        <input type="file" name="img" className="file-input file-input-bordered w-full max-w-xs" />
                    </div><br /><br />
                    <div>
                        <label className="text-xl text-sky-600">Update Your Name :</label> <br /><br />
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    </div><br /><br />
                    <input className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-500 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-400 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none" type="submit" value="Update Profile" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;