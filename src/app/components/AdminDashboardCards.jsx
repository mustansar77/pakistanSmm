"use client";

import { useEffect, useState } from "react";
import { FaUsers, FaShoppingCart, FaWallet, FaPlug } from "react-icons/fa";

const DashboardCards = () => {
  const [totalUsers, setTotalUsers] = useState([]);
  const [totalOrders, setTotalOrders] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/allUser");
        if (!response.ok) throw new Error("Failed to fetch users.");
        const data = await response.json();
        setTotalUsers(data);

        // Ensure balance values are valid numbers
        const balanceSum = data.reduce(
          (sum, user) => sum + (Number(user.balance) || 0),
          0
        );
        setTotalBalance(balanceSum);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/allOrders");
        if (!response.ok) throw new Error("Failed to fetch orders.");
        const data = await response.json();
        setTotalOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Users Card */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
        <div className="bg-blue-500 p-4 rounded-full text-white">
          <FaUsers className="text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-gray-900">{totalUsers.length}</p>
        </div>
      </div>

      {/* Total Orders Card */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
        <div className="bg-green-500 p-4 rounded-full text-white">
          <FaShoppingCart className="text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-700">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-900">{totalOrders.length}</p>
        </div>
      </div>

      {/* Total Balance Card */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
        <div className="bg-yellow-500 p-4 rounded-full text-white">
          <FaWallet className="text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-700">Total Balance</h3>
          <p className="text-2xl font-bold text-gray-900">
            Rs {totalBalance.toFixed(2)}
          </p>
        </div>
      </div>

      {/* API Connection Card */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
        <div className="bg-gray-500 p-4 rounded-full text-white">
          <FaPlug className="text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-700">API Status</h3>
          <p className="text-2xl font-bold text-green-600">Connected</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
