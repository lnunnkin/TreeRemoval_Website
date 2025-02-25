import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

const Testimonials = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    rating: 5
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with testimonial data
    const subject = 'New Customer Testimonial';
    const body = `
Name: ${formData.name}
Rating: ${formData.rating} stars
Testimonial: ${formData.text}
    `;
    
    const mailtoLink = `mailto:braddjtreeservice@yahoo.com,tammydjtreeservice@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: '',
      text: '',
      rating: 5
    });
    setIsFormOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Customer Reviews</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We value our customers' feedback. Be the first to share your experience with our services and help others make informed decisions.
        </p>

        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="w-full bg-white px-4 py-3 rounded-lg shadow-md flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-semibold text-gray-900">
              Share Your Experience
            </span>
            {isFormOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {isFormOpen && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
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
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            rating <= formData.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Share your experience with our service..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;