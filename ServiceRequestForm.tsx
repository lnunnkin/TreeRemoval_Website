import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'Tree Removal',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Tree Service Request - ${formData.service}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Service: ${formData.service}
Message: ${formData.message}
    `;
    
    // Send to both email addresses
    const mailtoLink = `mailto:braddjtreeservice@yahoo.com,tammydjtreeservice@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: 'Tree Removal',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request Service</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Service Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Tree Removal</option>
            <option>Tree Trimming</option>
            <option>Emergency Service</option>
            <option>Stump Removal</option>
            <option>Debris Removal</option>
            <option>Tree Health Assessment</option>
            <option>Land Clearing</option>
            <option>Brush Removal</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>Submit Request</span>
        </button>
      </form>
    </div>
  );
};

export default ServiceRequestForm;