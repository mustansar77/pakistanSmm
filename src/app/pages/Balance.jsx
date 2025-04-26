"use client";
import React, { useState } from "react";
import { FaWallet, FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";

const Balance = () => {
  const [balanceData, setBalanceData] = useState({
    balance: 100.00,
    spent: 30.25,
    deposit: 150.00
  });

  return (
    <section className="bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          My Balance
        </h2>

        <div className="flex gap-5 mx-[60px] items-center justify-center">
          {/* Balance */}
          <div className="flex items-center w-[30%] gap-4 bg-gray-200 p-4 rounded-lg shadow">
            <div className="bg-blue-500 p-3 rounded-lg">
              <FaWallet className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Balance</h3>
              <p className="text-xl font-bold text-gray-900">
                ${balanceData.balance.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Spent */}
          <div className="flex items-center w-[30%] gap-4 bg-gray-200 p-4 rounded-lg shadow">
            <div className="bg-red-500 p-3 rounded-lg">
              <FaShoppingCart className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Spent</h3>
              <p className="text-xl font-bold text-gray-900">
                ${balanceData.spent.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Deposit */}
          <div className="flex items-center w-[30%] gap-4 bg-gray-200 p-4 rounded-lg shadow">
            <div className="bg-green-500 p-3 rounded-lg">
              <FaMoneyBillWave className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Deposit
              </h3>
              <p className="text-xl font-bold text-gray-900">
                ${balanceData.deposit.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Balance;
