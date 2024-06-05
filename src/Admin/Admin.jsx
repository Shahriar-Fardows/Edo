import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";

const Admin = () => {
    return (
        <div>
            <div>
                {/* here come sidebar */}
                <AdminNav/>
                <div className="flex-1 md:ml-80 md:mr-20">
                    <div className="pt-[80px] min-h-[calc(100vh-64px)]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;