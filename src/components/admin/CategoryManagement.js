// src/components/admin/CategoryManagement.js
import React, { useState } from 'react';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Category Management</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p>Category management interface coming soon...</p>
      </div>
    </div>
  );
};

export default CategoryManagement;