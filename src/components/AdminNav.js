import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => (
  <nav className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/admin/products" className="hover:underline">Product Management</Link>
        </li>
        <li>
          <Link to="/admin/invoices" className="hover:underline">Invoice Management</Link>
        </li>
        <li>
          <Link to="/admin/comments" className="hover:underline">Comment Approval</Link>
        </li>
        <li>
          <Link to="/admin/deliveries" className="hover:underline">Delivery Management</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default AdminNav;
