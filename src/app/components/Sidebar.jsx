"use client"; // Since it's a client-side component

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaUsers, FaCreditCard, FaCogs, FaShoppingCart, FaTachometerAlt } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
      </div>
      <ul>

        <li>
          <Link href="/admin/dashboard" className={`flex items-center p-2 mb-4 text-white rounded-md ${pathname === "/admin" ? "bg-blue-600" : ""}`}>
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link href="/admin/user" className={`flex items-center p-2 mb-4 text-white rounded-md ${pathname === "/admin/users" ? "bg-blue-600" : ""}`}>
            <FaUsers className="mr-2" /> Users
          </Link>
        </li>
        <li>
          <Link href="/admin/balance" className={`flex items-center p-2 mb-4 text-white rounded-md ${pathname === "/admin/updateBalance" ? "bg-blue-600" : ""}`}>
            <FaCreditCard className="mr-2" /> Update Balance
          </Link>
        </li>
        <li>
          <Link href="/admin/manageapi" className={`flex items-center p-2 mb-4 text-white rounded-md ${pathname === "/admin/api" ? "bg-blue-600" : ""}`}>
            <FaCogs className="mr-2" /> API Management
          </Link>
        </li>
        <li>
          <Link href="/admin/services" className={`flex items-center p-2 mb-4 text-white rounded-md ${pathname === "/admin/services" ? "bg-blue-600" : ""}`}>
            <FaCogs className="mr-2" /> Services
          </Link>
        </li>
        <li>
          <Link href="/admin/orders" className={`flex items-center p-2 mb-4 text-white rounded-md ${pathname === "/admin/orders" ? "bg-blue-600" : ""}`}>
            <FaShoppingCart className="mr-2" /> Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
