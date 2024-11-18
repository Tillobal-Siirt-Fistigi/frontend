import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AdminHeader from '../components/admin/AdminHeader';
import Sidebar from '../components/admin/Sidebar';
import ProductManagement from '../components/admin/ProductManagement';
import CategoryManagement from '../components/admin/CategoryManagement';
import DeliveryManagement from '../components/admin/DeliveryManagement';
import CommentModeration from '../components/admin/CommentModeration';
import PriceManagement from '../components/admin/PriceManagement';
import DiscountManagement from '../components/admin/DiscountManagement';
import InvoiceManagement from '../components/admin/InvoiceManagement';
import Analytics from '../components/admin/Analytics';
import ReturnManagement from '../components/admin/ReturnManagement';

const AdminDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      <div className="flex">
        <Sidebar userRole={user?.role} />
        <main className="flex-1 p-6">
          {user?.role === 'PRODUCT_MANAGER' && (
            <Routes>
              <Route path="products" element={<ProductManagement />} />
              <Route path="categories" element={<CategoryManagement />} />
              <Route path="deliveries" element={<DeliveryManagement />} />
              <Route path="comments" element={<CommentModeration />} />
            </Routes>
          )}
          
          {user?.role === 'SALES_MANAGER' && (
            <Routes>
              <Route path="pricing" element={<PriceManagement />} />
              <Route path="discounts" element={<DiscountManagement />} />
              <Route path="invoices" element={<InvoiceManagement />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="returns" element={<ReturnManagement />} />
            </Routes>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;