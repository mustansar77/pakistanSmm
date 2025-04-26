"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [itemsPerPage] = useState(5); // Items per page

  // Fetch orders from the API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/allOrders');
        console.log('Response:', response); // Log the response
        if (!response.ok) {
          console.error('Failed to fetch orders:', response.status);
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        console.log('Fetched orders:', data); // Log the fetched data
        setOrders(data); // Store orders in state
      } catch (error) {
        console.error('Error fetching orders:', error); // Log any error
      } finally {
        setLoading(false); // Stop loading when the request completes
      }
    };

    fetchOrders();
  }, []);

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Manage Orders</h2>
      <p className="text-gray-600 mb-6">View and manage orders placed by users.</p>

      {/* Orders Table */}
      {loading ? (
        <div className="flex justify-center items-center py-6">
          <span className="text-xl text-gray-700">Loading orders...</span>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg ring-1 ring-gray-200">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Service</th>
                <th>Link</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Price</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.length > 0 ? (
                currentOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td className="text-sm text-gray-700">{order.serviceId}</td>
                    <td className="text-sm text-gray-700">{order.link}</td>
                    <td className="text-sm text-gray-700">{order.quantity}</td>
                    <td className="text-sm text-gray-700">{order.description}</td>
                    <td className="text-sm text-gray-700">${order.price}</td>
                    <td className="text-sm text-gray-700">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm">View</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-3 px-4 text-center text-gray-600">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            <nav>
              <ul className="pagination flex space-x-2">
                {Array.from({ length: Math.ceil(orders.length / itemsPerPage) }, (_, i) => (
                  <li key={i + 1} className="page-item">
                    <button
                      onClick={() => paginate(i + 1)}
                      className={`px-3 py-1 rounded ${currentPage === i + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminOrders;