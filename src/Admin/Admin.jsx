import { Link, Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Link to="/web-admin/admin-home">admin</Link>
            <Link to="/">admin</Link>
            <Link to="/">admin</Link>
            <Link to="/">admin</Link>
            <Link to="/">admin</Link>
            <Link to="/">admin</Link>
            <Link to="/">admin</Link>
            <Link to="/">admin</Link>
            <Outlet/>
        </div>
    );
};

export default Admin;