import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://imgur.com/y9VwM45.jpg")',
          opacity: '0.8'
        }}
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Professional Tree Services 
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Expert tree removal, trimming, and emergency services in Evansville Indiana. Available 24/7.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Request Service
          </a>
          <a 
            href="tel:8124308667" 
            className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;