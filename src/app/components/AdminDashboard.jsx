"use client";

import DashboardLayout from "./DashboardLayout";
import DashboardCards from "./AdminDashboardCards";
import AnalyticsGraph from "./AdminDashboardGraph";

const AdminDashboard = () => {
  const data = {
    totalUsers: 1200,
    totalOrders: 3456,
    totalBalance: 12000.75,
    apiStatus: "Connected",
  };

  const graphData = {
    labels: ["January", "February", "March", "April", "May", "June"], // Example data
    totalUsersData: [120, 200, 300, 500, 800, 1200],
    totalOrdersData: [50, 200, 300, 400, 1000, 1200],
    totalBalanceData: [500, 1000, 1500, 2500, 5000, 12000],
  };

  return (
    <DashboardLayout>
      <div className="  h-[100%]">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Welcome to the Admin Dashboard</h2>

        {/* Dashboard Cards */}
        <DashboardCards data={data} />

        {/* Analytics Graph */}
        <div className="mt-[13px]">
          <AnalyticsGraph graphData={graphData} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
