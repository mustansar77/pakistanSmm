import Link from 'next/link';
import React from 'react';

const User = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex gap-5 justify-center">
        <Link href="/new_order" className="hover:text-blue-400 transition">
          New Order
        </Link>
        <Link href="/order_history" className="hover:text-blue-400 transition">
          Order History
        </Link>
        <Link href="/transfer_balance" className="hover:text-blue-400 transition">
          Balance Transfer
        </Link>
        <Link href="/fund" className="hover:text-blue-400 transition">
          Funds
        </Link>
        <Link href="/transictionhistory" className="hover:text-blue-400 transition">
          Transiction History
        </Link>
        <Link href="/account" className="hover:text-blue-400 transition">
          Account
        </Link>
      </div>
    </nav>
  );
};

export default User;
