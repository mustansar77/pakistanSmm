"use client";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Funds = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [amount, setAmount] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const accountDetails = {
    JazzCash: {
      name: "Mustansar Hussain Tariq",
      number: "03405926344",
    },
    EasyPaisa: {
      name: "Mustansar Hussain Tariq",
      number: "6347234326432",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentMethod || !transactionId || !amount || !isChecked) {
      toast.error("Please fill all fields and agree to the terms.");
      return;
    }

    setLoading(true);

    // Simulate delay and fake response
    setTimeout(() => {
      toast.success("Funds added successfully!");
      setPaymentMethod("");
      setTransactionId("");
      setAmount("");
      setIsChecked(false);
      setLoading(false);
    }, 1500);
  };

  return (
    <section>
      <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col justify-center items-center h-[84vh] md:h-[83vh]">
        <h1 className="text-2xl font-bold text-center mb-6">Payment Methods</h1>

        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-textcolor outline-none"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Choose Payment Method</option>
          <option value="JazzCash">JazzCash</option>
          <option value="EasyPaisa">EasyPaisa</option>
        </select>

        {paymentMethod && (
          <form onSubmit={handleSubmit} className="mt-6 p-5 bg-white shadow-md rounded-lg">
            <p className="text-lg font-semibold mb-2 text-gray-800">
              Selected: {paymentMethod}
            </p>
            <div className="bg-gray-200 p-4 rounded-md">
              <h2 className="text-xl font-bold">{accountDetails[paymentMethod].name}</h2>
              <p className="text-md text-gray-700">
                <strong>Account Number:</strong> {accountDetails[paymentMethod].number}
              </p>
            </div>

            <input
              type="text"
              placeholder="Transaction ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="w-full p-3 mt-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-textcolor outline-none"
              required
            />

            <input
              type="number"
              placeholder="Enter Paid Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-textcolor outline-none"
              required
            />
            <p className="text-sm text-gray-600 mt-1">Min Rs: 50 | Max Rs: 10,000</p>

            <div className="flex items-start mt-3">
              <input
                type="checkbox"
                id="fraudCheckbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mt-1"
              />
              <label htmlFor="fraudCheckbox" className="ml-2 text-sm text-gray-700">
                Yes, I understand that after funds are added, I will not ask for fraudulent disputes or chargebacks.
              </label>
            </div>

            <button
              type="submit"
              className={`w-full p-3 mt-4 rounded-lg transition-all ${isChecked
                ? "bg-textcolor text-white hover:bg-textcolor"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              disabled={!isChecked || loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}

        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      </div>
    </section>
  );
};

export default Funds;
