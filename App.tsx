import React from 'react';
import { Phone, Mail, Clock, MapPin, Send, Facebook } from 'lucide-react';
import ServiceRequestForm from './components/ServiceRequestForm';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Equipment from './components/Equipment';
import Reputation from './components/Reputation';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Equipment />
      <Reputation />
      <Testimonials />
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <a href="tel:8124308667" className="text-gray-700 hover:text-green-600">
                    (812) 430-8667
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Evansville, Indiana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Available 24/7 for Emergency Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Facebook className="w-5 h-5 text-green-600" />
                  <a 
                    href="https://www.facebook.com/DRJackson1103" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600"
                  >
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>
            <ServiceRequestForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-xl font-bold mb-4 md:mb-0">DJ Tree Service</span>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} DJ Tree Service. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;