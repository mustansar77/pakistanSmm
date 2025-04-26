import React from "react";

const Balance_Transfer = () => {
  return (
    <section className="flex justify-center items-center h-[84vh]  md:h-[83vh]  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-textcolor text-center mb-4">Balance Transfer</h1>

        <form>
          {/* Transfer To */}
          <div className="mb-4">
            <label className="block text-textcolor font-medium text-lg mb-1">Transfer To</label>
            <input
              type="email"
              placeholder="Enter recipient email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-textcolor outline-none"
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label className="block text-textcolor font-medium text-lg mb-1">Amount (PKR)</label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-textcolor outline-none"
            />
          </div>

          {/* Note */}
          <div className="mb-4">
            <label className="block text-textcolor text-lg font-medium mb-1">Note (Optional)</label>
            <textarea
              placeholder="Add a note..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-textcolor outline-none resize-none h-24"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-textcolor text-white p-3 rounded-lg hover:bg-textcolor transition-all">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Balance_Transfer;
