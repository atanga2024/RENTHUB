

import { Home, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-600">RentHub</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Making rental search easier and more reliable for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              {['About Us', 'Properties', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                info@renthub.com
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Follow Us</h3>
            <div className="mt-4 flex space-x-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-green-600"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} RentHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}