"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import { toast, Toaster } from "react-hot-toast";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newService, setNewService] = useState({
    serviceId: "",
    description: "",
    price: "",
  });



  const handleDelete = async (serviceId) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      const response = await fetch("/api/service/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: serviceId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete service.");
      }

      toast.success("Service deleted successfully!");

      // Update UI: Remove deleted service from state
      setServices(services.filter((service) => service._id !== serviceId));
    } catch (error) {
      toast.error(error.message || "Failed to delete service.");
    }
  };





  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/service");
        const data = await response.json();
        if (response.ok) {
          setServices(data.services);
        } else {
          console.error(data.message || "Failed to fetch services");
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/service/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newService),
      });

      if (!response.ok) {
        throw new Error("Failed to add service.");
      }

      const newServiceData = await response.json();
      setServices([...services, newServiceData.service]);

      toast.success("Service added successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      setIsModalOpen(false);
      setNewService({ serviceId: "", description: "", price: "" });
    } catch (error) {
      toast.error(error.message || "Failed to add service.");
    }
  };

  return (
    <DashboardLayout>
      <Toaster />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">Manage Services</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          + Add Service
        </button>
      </div>
      <p className="text-gray-600 mb-6">Here you can manage all available services.</p>

      {loading ? (
        <div className="flex justify-center items-center py-6">
          <span className="text-xl text-gray-700">Loading services...</span>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg ring-1 ring-gray-200">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Service ID</th>
                <th>Description</th>
                <th>Price (Rs per 1000)</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentServices.length > 0 ? (
                currentServices.map((service) => (
                  <tr key={service._id} className="hover:bg-gray-50">
                    <td className="text-sm text-gray-700">{service.serviceId}</td>
                    <td className="text-sm text-gray-700">{service.description}</td>
                    <td className="text-sm text-gray-700">Rs {service.price}</td>
                    <td className="text-sm text-gray-700">{new Date(service.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-3 px-4 text-center text-gray-600">
                    No services found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex justify-center mt-6">
            <nav>
              <ul className="pagination flex space-x-2">
                {Array.from({ length: Math.ceil(services.length / itemsPerPage) }, (_, i) => (
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

      {/* Add Service Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add New Service</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="serviceId"
                value={newService.serviceId}
                onChange={handleInputChange}
                placeholder="Service ID"
                className="p-2 border rounded-md w-full"
                required
              />
              <input
                type="text"
                name="description"
                value={newService.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="p-2 border rounded-md w-full"
                required
              />
              <input
                type="number"
                name="price"
                value={newService.price}
                onChange={handleInputChange}
                placeholder="Price (Rs per 1000)"
                className="p-2 border rounded-md w-full"
                min="0"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminServices;
