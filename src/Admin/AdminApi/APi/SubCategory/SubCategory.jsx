import { useEffect, useState } from 'react';

const SubCategory = () => {
    const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newSubCategory, setNewSubCategory] = useState('');

  useEffect(() => {
    // Fetch categories from server
    fetch('http://localhost:5000/category')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleAddSubCategory = () => {
    if (selectedCategory && newSubCategory) {
      fetch(`http://localhost:5000/category/${selectedCategory}/sub-category`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subCategory: newSubCategory }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Sub-category added:', data);
          setNewSubCategory('');
          // Optionally update the local state or re-fetch categories to reflect changes
        })
        .catch(error => console.error('Error adding sub-category:', error));
    }
  };

  return (
    <div>
      <h1>Category Manager</h1>
      <select onChange={e => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category._id} value={category._id}>{category.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="New sub-category"
        value={newSubCategory}
        onChange={e => setNewSubCategory(e.target.value)}
      />
      <button onClick={handleAddSubCategory}>Add Sub-Category</button>
    </div>
  );
};

export default SubCategory;