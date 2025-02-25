import React from 'react';

const services = [
  {
    title: 'Tree Health Assessment',
    description: 'Professional pruning services to maintain tree health and improve appearance.',
    image: 'https://imgur.com/cGvL8JX.jpg'
  },
  {
    title: 'Tree Removal',
    description: 'Safe and efficient removal of trees of any size.',
    image: 'https://i.imgur.com/23EC4B1.jpg'
  },
  {
    title: 'Land Clearing',
    description: 'Complete land clearing services for construction, development, or property improvement. We handle everything from small lots to large acreage.',
    image: 'https://imgur.com/lnLCcMt.jpg'
  },
  {
    title: 'Emergency Storm Services',
    description: '24/7 emergency response for storm damage and hazardous situations.',
    image: 'https://i.imgur.com/4E6U2ZF.jpg'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-64 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundImage: `url(${service.image})`,
                    backgroundPosition: service.position || 'center',
                    backgroundSize: 'cover'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;