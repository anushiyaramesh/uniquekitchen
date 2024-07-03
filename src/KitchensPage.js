import React from 'react';
import { motion } from 'framer-motion';

const KitchensPage = () => {
  const kitchenCabinets = [
    {
      title: 'Modern Kitchen Cabinets',
      description: 'Explore sleek and contemporary kitchen cabinets designed for modern living spaces.',
      imgSrc: '/k1.png',
      imgAlt: 'Modern Kitchen Cabinets',
    },
    {
      title: 'Traditional Kitchen Cabinets',
      description: 'Discover timeless kitchen cabinets that blend elegance with functionality for traditional homes.',
      imgSrc: '/k2.png',
      imgAlt: 'Traditional Kitchen Cabinets',
    },
    {
      title: 'Luxury Kitchen Cabinets',
      description: 'Indulge in luxury with our premium kitchen cabinets featuring top-quality materials and craftsmanship.',
      imgSrc: '/k9.png',
      imgAlt: 'Luxury Kitchen Cabinets',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-[#9a3412]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kitchen Cabinets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitchenCabinets.map((cabinet, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <img
                src={cabinet.imgSrc}
                alt={cabinet.imgAlt}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#D61210]">{cabinet.title}</h3>
              <p className="text-[#D61210]">{cabinet.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-[#D61210] mb-2">Discover Your Dream Kitchen</h2>
        <p className="text-lg text-[#D61210] mb-4">
          Ready to enhance your kitchen with our custom cabinets? Contact us now to discuss your project.
        </p>
        <a href="/contact" className="inline-block bg-black text-[#D61210] px-6 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default KitchensPage;
