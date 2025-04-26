"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaCheck } from "react-icons/fa";
import Balance from "./Balance";

const NewOrder = () => {
  const [services, setServices] = useState([
    { serviceId: "1", description: "YouTube Subscribers", price: 100 },
    { serviceId: "2", description: "Instagram Followers", price: 150 },
    { serviceId: "3", description: "TikTok Likes", price: 50 },
  ]);
  const [filteredServices, setFilteredServices] = useState(services);
  const [selectedService, setSelectedService] = useState("1");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [userBalance, setUserBalance] = useState(500);  // Dummy balance
  const [newOrder, setNewOrder] = useState({
    link: "",
    serviceId: "1",
    price: "100",
    description: "YouTube Subscribers",
    quantity: "100",
  });

  useEffect(() => {
    const updateOrderDetails = (serviceId, quantity) => {
      const serviceDetails = services.find((item) => item.serviceId === serviceId);
      if (serviceDetails) {
        const quantityNum = parseInt(quantity || 100);
        const calculatedPrice = (serviceDetails.price / 1000) * quantityNum; // Price per 1000 units
        setNewOrder({
          link: "",
          serviceId,
          price: calculatedPrice.toFixed(2),
          description: serviceDetails.description,
          quantity,
        });
      }
    };
    updateOrderDetails(newOrder.serviceId, newOrder.quantity);
  }, [services, newOrder.serviceId, newOrder.quantity]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "quantity" && value < 10) return;
    setNewOrder((prev) => ({ ...prev, [name]: value }));
    if (name === "quantity") updateOrderDetails(newOrder.serviceId, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseFloat(newOrder.price) > userBalance) {
      alert("Insufficient balance to place this order.");
      return;
    }

    // Dummy "order" submission success
    setUserBalance(userBalance - parseFloat(newOrder.price));
    alert("Order added successfully!");

    setNewOrder({
      link: "",
      serviceId: "1",
      price: "100",
      description: "YouTube Subscribers",
      quantity: "100",
    });
  };

  return (
    <>
      <Balance userBalance={userBalance} setUserBalance={setUserBalance} />
      <div className="flex items-center justify-center min-h-screen w-[100%] bg-gray-100 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6">New Order</h2>

          {/* Search Input */}
          <div className="relative mb-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Service by ID or Description"
              className="pl-10 p-2 border rounded-md w-full"
            />
          </div>

          {/* Dropdown */}
          <div className="relative mb-4" ref={dropdownRef}>
            <button
              className="px-4 py-2 border w-full rounded-md bg-gray-100 text-left"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {services.find((s) => s.serviceId === selectedService)?.description || "Select a Service"}
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
                {filteredServices.map((item) => (
                  <li
                    key={item.serviceId}
                    onClick={() => {
                      setSelectedService(item.serviceId);
                      setNewOrder((prev) => ({
                        ...prev,
                        serviceId: item.serviceId,
                        price: ((item.price / 1000) * parseInt(newOrder.quantity)).toFixed(2),
                        description: item.description,
                      }));
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    <span className="bg-textcolor p-1 rounded-[3px] mx-3">{item.serviceId}</span>
                    {item.description} - Rs {item.price} per 1000
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="link"
              value={newOrder.link}
              onChange={handleInputChange}
              placeholder="Video Link"
              className="p-2 border rounded-md w-full"
              required
            />
            <input
              type="number"
              name="quantity"
              value={newOrder.quantity}
              onChange={handleInputChange}
              placeholder="Quantity"
              className="p-2 border rounded-md w-full"
              min="10"
              required
            />
            <input
              type="text"
              value={`Rs: ${newOrder.price}`}
              readOnly
              className="p-2 border rounded-md w-full bg-gray-100 cursor-not-allowed"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md w-full flex items-center justify-center gap-2 hover:bg-blue-700"
            >
              <FaCheck /> Submit Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewOrder;
