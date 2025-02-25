import React from 'react';

const equipment = [
  {
    image: 'https://imgur.com/LlkfYrB.jpg'
  },
  {
    image: 'https://imgur.com/fgIYKuV.jpg'
  },
  {
    image: 'https://imgur.com/5fgG5s8.jpg'
  },
  {
    image: 'https://imgur.com/42ywUPG.jpg'
  },
  {
    image: 'https://imgur.com/nBS005g.jpg'
  },
  {
    image: 'https://imgur.com/YW3JTPi.jpg'
  },
  {
    image: 'https://imgur.com/qoopEt5.jpg'
  },
  {
    image: 'https://imgur.com/8a6F9Oc.jpg'
  }
];

const Equipment = () => {
  return (
    <section id="equipment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Professional Equipment</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {equipment.map((item, index) => (
            <div 
              key={index} 
              className="aspect-square relative overflow-hidden rounded-lg shadow-md"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;