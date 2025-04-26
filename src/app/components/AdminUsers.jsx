"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";

const AdminUsers = () => {
  const [users, setUsers] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Track popup visibility
  const [amount, setAmount] = useState(""); // Track input amount

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/allUser`);
        const data = await response.json();
        if (response.ok) {
          setUsers(data); // Adjust according to your API response structure
        } else {
          console.error(data.message || "Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Open popup and set selected user
  const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };

  // Close popup and reset state
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedUser(null);
    setAmount("");
  };

  // Handle balance update
  const handleUpdateBalance = async () => {
    if (!selectedUser || !amount) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      const response = await fetch("/api/funds/admin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: selectedUser._id,
          amount, // Ensure amount is a number
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Balance updated successfully!");
        // Update the user's balance in the local state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === selectedUser._id
              ? { ...user, balance: user.balance }
              : user
          )
        );
        closePopup();
      } else {
        console.error(data.message || "Failed to update balance");
        alert(data.message || "Failed to update balance");
      }
    } catch (error) {
      console.error("Error updating balance:", error);
      alert("An error occurred while updating the balance.");
    }
  };

  return (
    <>
      <DashboardLayout>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Users</h2>

        {/* Users Table */}
        {loading ? (
          <div className="flex justify-center items-center py-6">
            <span className="text-xl text-gray-700">Loading users...</span>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg ring-1 ring-gray-200">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>WhatsApp</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>ID</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>

                {
                  users.map((user, index) => {
                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleRowClick(user)}
                      >
                        <td className="text-sm text-gray-700">{user.name}</td>
                        <td className="text-sm text-gray-700">{user.whatsapp}</td>
                        <td className="text-sm text-gray-700">{user.email}</td>
                        <td>
                          <button className="btn btn-primary btn-sm">View</button>
                        </td>
                        <td>{user._id}</td>
                        <td>{user.balance}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        )}
      </DashboardLayout>

      {/* Popup for Updating Balance */}
      {isPopupOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Update Balance for {selectedUser.name}</h3>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateBalance}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminUsers;
