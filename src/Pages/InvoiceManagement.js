import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InvoiceManagement = () => {
  const invoices = [
    { id: 1, date: '2024-11-01', total: 200.00 },
    { id: 2, date: '2024-11-02', total: 150.00 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-green-600">Invoice Management</h1>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Invoice ID</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map(invoice => (
                <tr key={invoice.id}>
                  <td className="border border-gray-300 px-4 py-2">{invoice.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{invoice.date}</td>
                  <td className="border border-gray-300 px-4 py-2">${invoice.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvoiceManagement;
