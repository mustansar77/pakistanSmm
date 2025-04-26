import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-4 text-center">
      <p className="mb-3">Copyright © 2025 SMM Panel</p>

      <div className="flex justify-center space-x-4">
        <Link href="#">
          <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 cursor-pointer">
            <FaFacebook className="text-white text-xl" />
          </div>
        </Link>
        <Link href="#">
          <div className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 cursor-pointer">
            <FaInstagram className="text-white text-xl" />
          </div>
        </Link>
        <Link href="#">
          <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 cursor-pointer">
            <FaTwitter className="text-white text-xl" />
          </div>
        </Link>
        <Link href="#">
          <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 cursor-pointer">
            <FaTelegram className="text-white text-xl" />
          </div>
        </Link>
        <Link href="#">
          <div className="bg-gray-800 p-3 rounded-full hover:bg-red-600 cursor-pointer">
            <FaYoutube className="text-white text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
