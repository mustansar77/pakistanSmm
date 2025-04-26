"use client";
import { useEffect, useState } from "react";

const FundsHistory = () => {
  const [funds, setFunds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    // Dummy funds history data
    const dummyFunds = [
      {
        paymentMethod: "JazzCash",
        accountNumber: "03405926344",
        transactionId: "TXN123456",
        amount: 1000,
        status: "Pending",
      },
      {
        paymentMethod: "EasyPaisa",
        accountNumber: "6347234326432",
        transactionId: "TXN789012",
        amount: 750,
        status: "Approved",
      },
      {
        paymentMethod: "JazzCash",
        accountNumber: "03405926344",
        transactionId: "TXN345678",
        amount: 500,
        status: "Rejected",
      },
      {
        paymentMethod: "EasyPaisa",
        accountNumber: "6347234326432",
        transactionId: "TXN901234",
        amount: 2000,
        status: "Pending",
      },
      {
        paymentMethod: "JazzCash",
        accountNumber: "03405926344",
        transactionId: "TXN567890",
        amount: 300,
        status: "Approved",
      },
      {
        paymentMethod: "JazzCash",
        accountNumber: "03405926344",
        transactionId: "TXN777777",
        amount: 1200,
        status: "Pending",
      },
    ];
    setFunds(dummyFunds);
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentFunds = funds.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Funds History</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Payment Method</th>
              <th className="p-3 border">Account Number</th>
              <th className="p-3 border">Transaction ID</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentFunds.length > 0 ? (
              currentFunds.map((fund, index) => (
                <tr key={index} className="border">
                  <td className="p-3 border">{fund.paymentMethod}</td>
                  <td className="p-3 border">{fund.accountNumber}</td>
                  <td className="p-3 border">{fund.transactionId}</td>
                  <td className="p-3 border">Rs. {fund.amount}</td>
                  <td className="p-3 border">{fund.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-3">
                  No transaction history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`mx-1 px-3 py-1 border rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-3 py-1">{currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => (indexOfLastRow < funds.length ? prev + 1 : prev))}
          className={`mx-1 px-3 py-1 border rounded ${indexOfLastRow >= funds.length ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          disabled={indexOfLastRow >= funds.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FundsHistory;
