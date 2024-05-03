import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen z-50 py-2">
                <Outlet />
            </div>
            <div className="z-10">
                <Footer />
            </div>
        </div>
    );
};

export default Root;