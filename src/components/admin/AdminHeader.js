import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const AdminHeader = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Logged in as: {user?.name} ({user?.role})
        </p>
      </div>
    </header>
  );
};

export default AdminHeader;