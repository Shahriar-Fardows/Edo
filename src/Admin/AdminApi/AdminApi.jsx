import CategoryList from "./APi/CategoryList/CategoryList";
import Category from "./APi/Category/Category";

const AdminApi = () => {
    return (
        <div className="py-10 md:py-5">
            <div>
            <Category />
            </div>
            <div>
                <CategoryList/>
            </div>
        </div>
    );
};

export default AdminApi;