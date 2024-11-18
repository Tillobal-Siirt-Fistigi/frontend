// src/components/admin/InvoiceManagement.js
import React, { useState } from 'react';

const InvoiceManagement = () => {
  const [invoices, setInvoices] = useState([]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Invoice Management</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p>Invoice management interface coming soon...</p>
      </div>
    </div>
  );
};

export default InvoiceManagement;