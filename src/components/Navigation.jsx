import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShip, FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary">
              <FaShip className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-heading tracking-tight">
              SUNGAN <span className="text-primary">SHIPPING</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary font-semibold' : 'text-body'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) 
                    ? 'text-primary bg-primary-light' 
                    : 'text-body hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}