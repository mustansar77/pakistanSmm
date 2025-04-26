"use client"
import React, { useEffect, useState } from 'react';

const orderStatuses = [
  { title: "All Orders", status: "all", color: "bg-blue-500" },
  { title: "Pending", status: "Pending", color: "bg-yellow-500" },
  { title: "Completed", status: "Completed", color: "bg-green-500" },
  { title: "In Progress", status: "Processing", color: "bg-purple-500" },
  { title: "Cancelled", status: "Cancelled", color: "bg-red-500" },
];

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders', {
          method: "GET",
          credentials: "include"
        });
        if (!response.ok) throw new Error("Failed to fetch orders");

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const countOrdersByStatus = (status) => {
    if (status === "all") return orders.length;
    return orders.filter((order) => order.status === status).length;
  };

  // Count the pending orders
  const pendingOrderCount = orders.filter((order) => order.status === "Pending").length;

  if (loading) return <div className="text-center py-10 text-xl">Loading orders...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="h-[79vh]">
      {/* Order Statuses Overview Section */}
      <div className="max-w-[1170px] mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {orderStatuses.map((status, index) => (
          <div
            key={index}
            className={`${status.color} text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform`}
          >
            <h2 className="text-xl font-semibold">{status.title}</h2>
            <p className="text-3xl font-bold mt-2">{countOrdersByStatus(status.status)}</p>
          </div>
        ))}
      </div>

      {/* Table for Order Details Section */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Service ID</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Link</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Description</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Quantity</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">{item.serviceId}</td>
                <td className="py-3 px-4 text-gray-700">{item.link}</td>
                <td className="py-3 px-4 text-gray-700">{item.description}</td>
                <td className="py-3 px-4 text-gray-700">{item.quantity}</td>
                <td className="py-3 px-4 text-gray-700">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
