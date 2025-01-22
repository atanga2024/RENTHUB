import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, {user?.name}!
            </h1>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-700"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
          <div className="border-t pt-4">
            <p className="text-gray-600">
              Email: {user?.email}
            </p>
            <p className="text-gray-600">
              Role: {user?.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;