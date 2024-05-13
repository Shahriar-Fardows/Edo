import { NavLink } from "react-router-dom";
import { BsPostcardHeart } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

const DashboardLinks = () => {
  return (
    <div>
      <ul className="flex flex-col gap-3 items-center justify-center">
        <NavLink
          to="/dashboard/post"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active font-bold border border-dashed border-sky-600 rounded-lg"
              : ""
          }
        >
          <button className="w-44 gap-2  mx-auto py-2 flex items-center justify-center bg-sky-100 hover:bg-sky-400 rounded-md  font-medium hover:text-[#ffff] border-b-2">
            {" "}
            <BsPostcardHeart /> Post
          </button>
        </NavLink>
        <NavLink
          to="/dashboard/recharge_balance"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active font-bold border border-dashed border-sky-600 rounded-lg"
              : ""
          }
        >
          <button className="w-44 gap-2  mx-auto py-2 flex items-center justify-center bg-sky-100 hover:bg-sky-400 rounded-md  font-medium hover:text-[#ffff]">
            {" "}
            <BsPostcardHeart />Recharge Balance
          </button>
        </NavLink>
        <div>
          <button className="w-44 gap-2  mx-auto py-2 flex items-center justify-center bg-sky-100 hover:bg-sky-400 rounded-md  font-medium hover:text-[#ffff]">
            {" "}
            <CiLogout /> Logout
          </button>
        </div>
      </ul>
    </div>
  );
};

export default DashboardLinks;
