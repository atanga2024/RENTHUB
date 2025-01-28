import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, LogIn, UserPlus, Building, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-600">RentHub</span>
            </Link>
            <Link to="/apartments" className="ml-8 flex items-center text-gray-600 hover:text-green-600">
              <Building className="h-5 w-5 mr-1" />
              Find Apartments
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md">
                  Dashboard
                </Link>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md flex items-center">
                    <Settings className="h-5 w-5 mr-1" />
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md flex items-center">
                  <LogIn className="h-5 w-5 mr-1" />
                  Login
                </Link>
                <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center">
                  <UserPlus className="h-5 w-5 mr-1" />
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/apartments"
              className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md"
            >
              Find Apartments
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md"
                >
                  Dashboard
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-green-600 block w-full text-left px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-600 text-white block px-3 py-2 rounded-md"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;