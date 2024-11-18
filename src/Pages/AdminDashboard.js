import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-8 text-green-600">Admin Dashboard</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to the Admin Dashboard. Use the navigation menu to manage products, invoices, and comments.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Product Management</h2>
              <p className="text-gray-700">Add, remove, and manage stock of products in the store.</p>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105">
                <a href="/admin/products">Go to Products</a>
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Invoice Management</h2>
              <p className="text-gray-700">View and manage invoices, track sales, and generate reports.</p>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105">
                <a href="/admin/invoices">Go to Invoices</a>
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Comment Approval</h2>
              <p className="text-gray-700">Approve or reject customer comments and ratings.</p>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105">
                <a href="/admin/comments">Go to Comments</a>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
