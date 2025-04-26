"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AnalyticsGraph = ({ graphData }) => {
  // Preparing the data
  const data = graphData.labels.map((label, index) => ({
    name: label,
    totalUsers: graphData.totalUsersData[index],
    totalOrders: graphData.totalOrdersData[index],
    totalBalance: graphData.totalBalanceData[index],
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Analytics Overview</h3>
      <ResponsiveContainer width="100%" height={630}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="totalOrders" stroke="#82ca9d" />
          <Line type="monotone" dataKey="totalBalance" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsGraph;
