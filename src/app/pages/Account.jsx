"use client";
import React, { useState } from 'react';

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [timezone, setTimezone] = useState('(UTC +05:00) Asia/Karachi');
  const [balance, setBalance] = useState('');

  const handleSave = () => {
    // Handle save logic here (e.g., save to a server or local storage)
    console.log('Saved:', { name, email, whatsapp, timezone, balance });
  };

  return (
    <div className="p-6 max-w-[1170px] mx-auto flex bg-gray-100 h-[83vh] items-center justify-center gap-5">
      <div className='bg-textcolor w-[40%] p-5 rounded-[5px]'>
        <div className="bg-white p-2 text-left rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 w-full border rounded-md"
          />
        </div>

        <div className="bg-white p-2 text-left rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">E-mail</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 w-full border rounded-md"
          />
        </div>

        <div className="bg-white p-2 text-left rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">WhatsApp</h2>
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="p-2 w-full border rounded-md"
          />
        </div>

        <div className="bg-white p-2 text-left rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Balance</h2>
          <input
            type="text"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            className="p-1 w-full border rounded-md"
          />
        </div>

        <div className="bg-white p-2 text-left rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Time zone</h2>
          <input
            type="text"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="p-1 w-full border rounded-md"
          />
        </div>

        <div className='flex justify-center items-center'>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
