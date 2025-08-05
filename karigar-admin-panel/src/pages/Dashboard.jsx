import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  // Simulate API call
  useEffect(() => {
    const fetchData = async () => {
      // Replace this with your real API
      const dummyData = [
        {
          id: 1,
          name: "Ravi Kumar",
          email: "ravi@example.com",
          phone: "9876543210",
          userType: "Labor",
          address: "Delhi, India",
          status: "Pending",
        },
        {
          id: 2,
          name: "Neha Contractor",
          email: "neha@example.com",
          phone: "9123456780",
          userType: "Contractor",
          address: "Mumbai, India",
          status: "Approved",
        },
      ];
      setUsers(dummyData);
    };

    fetchData();
  }, []);

  const handleApprove = (id) => {
    alert(`Approved user with ID ${id}`);
  };

  const handleReject = (id) => {
    alert(`Rejected user with ID ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md table-auto">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">User Type</th>
              <th className="py-3 px-4 text-left">Address</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.phone}</td>
                <td className="py-3 px-4">{user.userType}</td>
                <td className="py-3 px-4">{user.address}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => handleApprove(user.id)}
                  >
                    Approve
                  </Button>
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => handleReject(user.id)}
                  >
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
