import React from 'react';
import { Award, CheckCircle, Shield } from 'lucide-react';

const Reputation = () => {
  return (
    <section id="reputation" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Reputation</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">A+ BBB Rating</h3>
            <p className="text-gray-600">Recognized for excellence in customer service and business practices</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">Fully licensed and insured for your protection</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">20+ Years Experience</h3>
            <p className="text-gray-600">Serving Evansville with excellence since 2003</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reputation;