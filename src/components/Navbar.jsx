import { Menu, X, Home, LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-600">RentHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="flex items-center px-4 py-2 text-gray-700 hover:text-green-600">
              <LogIn className="h-5 w-5 mr-1" />
              Login
            </Link>
            <Link
              to="/signup"
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <UserPlus className="h-5 w-5 mr-1" />
              Sign Up
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/login"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Login
            </Link>
            <Link
              to="/signup"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}