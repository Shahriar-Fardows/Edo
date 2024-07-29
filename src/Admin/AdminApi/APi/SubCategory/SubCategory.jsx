import { useEffect, useState } from 'react';

const SubCategory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');

    useEffect(() => {
        // Fetch categories from server
        fetch('https://listing-web-server.up.railway.app/category')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleAddSubCategory = (e) => {
        e.preventDefault();
        const subCategory = e.target.sub_category.value;

        if (selectedCategoryId) {
            fetch(`https://listing-web-server.up.railway.app/category/${selectedCategoryId}/sub-category`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sub_category: subCategory })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Sub-category added:', data);
                // Optionally, update the local state to reflect the change
                setCategories(categories.map(category => 
                    category._id === selectedCategoryId ? {...category, sub_categories: [...(category.sub_categories || []), subCategory]} : category
                ));
            })
            .catch(error => console.error('Error adding sub-category:', error));
        } else {
            console.error('No category selected');
        }
    };

    return (
        <div>
            <div className="lg:w-[100%] border  p-10">
                <h1 className="text-2xl font-bold text-center">Update sub-category Api</h1><br />
                <form className=" " onSubmit={handleAddSubCategory}>
                    <select
                        name='category'
                        className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus: focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        onChange={(e) => setSelectedCategoryId(e.target.value)}
                    >
                        <option value="" className="text-lg">Select Category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id} className="text-lg">{category.category}</option>
                        ))}
                    </select> <br /><br />

                    <div className="relative">
                        <input id="id-01" type="text" name="sub_category" placeholder="Sub-category name" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus: focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                        <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                            Add Sub-category
                        </label>
                    </div><br />

                    <button type="submit" className="bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded">Add Sub-Category</button>
                </form>
            </div>
        </div>
    );
};

export default SubCategory;
