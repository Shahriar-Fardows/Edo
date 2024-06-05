import CategoryList from "./APi/CategoryList/CategoryList";
import Category from "./APi/Category/Category";
import SubCategory from "./APi/SubCategory/SubCategory";

const AdminApi = () => {
    return (
        <div className="py-10 md:py-5">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 w-full">
            <Category />
            <SubCategory/>
            </div>
            <div className="py-10">
                <CategoryList/>
            </div>
        </div>
    );
};

export default AdminApi;