import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";

const Admin = () => {
  return (
    <div>
      <AdminNav />
      <div>
        <div className="container bg-white mx-auto lg:ml-[16%]	 z-50 sm:py-[25%] md:py-[10%] lg:py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
