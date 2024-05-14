import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import useAuthContext from "../../Context/useAuthContext";
import DashboardLinks from "./DashboardLinks/DashboardLinks";

const Dashboard = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6 max-w-screen-xl mx-auto px-4">
        <div className="mt-8 w-60 mx-auto h-screen border border-dashed border-sky-500 rounded-xl">
          <div className="text-center mt-3 ">
            <img
              className="size-16 inline rounded-full border border-red-400 mt-2"
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              }
              alt="profile_images.png"
            />
          </div>
          <h1 className="text-xl font-semibold text-center mt-2">
            {user?.displayName}
          </h1>
          <p className="text-center font-bold text-sky-500 mt-4">Dashboard</p>
          <hr className="mt-4 border-sky-500 w-44 mx-auto" />
          {/* DashBoard Links */}
          <div className="mt-6">
            <DashboardLinks />
          </div>
        </div>
        <div className="mt-8 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
