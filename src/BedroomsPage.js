import React from 'react';
import { motion } from 'framer-motion';

const BedroomsPage = () => {
  const bedroomDesigns = [
    {
      title: 'Modern Bedroom Design',
      description: 'Discover contemporary bedroom designs that offer comfort and style for modern living spaces.',
      imgSrc: '/b6.png',
      imgAlt: 'Modern Bedroom Design',
    },
    {
      title: 'Traditional Bedroom Design',
      description: 'Explore timeless bedroom designs that create a cozy and elegant atmosphere for traditional homes.',
      imgSrc: '/b3.png',
      imgAlt: 'Traditional Bedroom Design',
    },
    {
      title: 'Luxury Bedroom Design',
      description: 'Indulge in luxury with our premium bedroom designs featuring exquisite details and superior craftsmanship.',
      imgSrc: '/b1.png',
      imgAlt: 'Luxury Bedroom Design',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-[#D61210]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bedroom Designs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bedroomDesigns.map((design, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <img
                src={design.imgSrc}
                alt={design.imgAlt}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#D61210]">{design.title}</h3>
              <p className="text-[#D61210]">{design.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#D61210] mb-2">Transform Your Bedroom</h2>
        <p className="text-lg text-[#D61210] mb-4">
          Ready to enhance your bedroom with our custom designs? Contact us now to discuss your project.
        </p>
        <a href="/contact" className="inline-block bg-black text-[#D61210] px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default BedroomsPage;
