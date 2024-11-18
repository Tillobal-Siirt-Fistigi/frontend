// src/components/admin/Analytics.js
import React, { useState } from 'react';

const Analytics = () => {
  const [data, setData] = useState(null);
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p>Analytics dashboard coming soon...</p>
      </div>
    </div>
  );
};

export default Analytics;