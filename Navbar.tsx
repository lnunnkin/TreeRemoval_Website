import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.imgur.com/PBFtAQk.png" 
              alt="DJ Tree Service Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">DJ Tree Service</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-green-600 flex items-center space-x-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1">
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                    Tree Pruning
                  </a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                    Tree Removal
                  </a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                    Stump Grinding
                  </a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                    Emergency Storm Services
                  </a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                    Debris Removal
                  </a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                    Tree Health Assessment
                  </a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                    Land Clearing
                  </a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                    Brush Removal
                  </a>
                </div>
              )}
            </div>
            
            <a href="#testimonials" className="text-gray-700 hover:text-green-600">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
            <a href="tel:8124308667" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              (812) 430-8667
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Tree Pruning</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Tree Removal</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Stump Grinding</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Emergency Storm Services</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Debris Removal</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Tree Health Assessment</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Land Clearing</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Brush Removal</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
              <a href="tel:8124308667" className="bg-green-600 text-white px-4 py-2 rounded-md text-center hover:bg-green-700">
                (812) 430-8667
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;