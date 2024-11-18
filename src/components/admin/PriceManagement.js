// src/components/admin/PriceManagement.js
import React, { useState } from 'react';

const PriceManagement = () => {
  const [prices, setPrices] = useState([]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Price Management</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p>Price management interface coming soon...</p>
      </div>
    </div>
  );
};

export default PriceManagement;