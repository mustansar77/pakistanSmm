"use client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // Make sure to import toast from react-hot-toast

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/service");
        if (!response.ok) throw new Error("Failed to fetch services.");
        const data = await response.json();
        setServices(data.services || []);
      } catch (error) {
        // Display the error using toast.error
        toast.error("Failed to fetch services. Please try again later.");
        console.error(error); // Log the actual error for debugging
      }
    };
    fetchServices();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentServices = services.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages based on service count
  const totalPages = Math.ceil(services.length / rowsPerPage);

  return (
    <div className="overflow-x-auto p-4">
      {/* Table displaying services */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left text-sm font-semibold text-gray-700">Service ID</th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700">Description</th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700">Price</th>
          </tr>
        </thead>
        <tbody>
          {/* No services message */}
          {currentServices.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center text-xl text-gray-500 p-6">
                No services available.
              </td>
            </tr>
          ) : (
            // Displaying services in rows
            currentServices.map((service) => (
              <tr key={service.serviceId} className="border-b">
                <td className="p-3 text-sm text-gray-700">{service.serviceId}</td>
                <td className="p-3 text-sm text-gray-700">{service.description}</td>
                <td className="p-3 text-sm text-gray-700">${service.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {/* Previous page button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>

        {/* Page indicator */}
        <span className="px-4 py-2 text-lg font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next page button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceList;
