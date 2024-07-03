import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Kitchen Fitting',
      description: 'We create custom kitchen designs tailored to your space and style.',
      imgSrc: '/k1.png',
      imgAlt: 'Kitchen Fitting Image',
      caption: 'Custom kitchen designs'
    },
    {
      title: 'Modern Bedrooms',
      description: 'Elegant and functional bedroom designs that suit your lifestyle.',
      imgSrc: '/b6.png',
      imgAlt: 'Modern Bedrooms Image',
      caption: 'Functional bedroom designs'
    },
    {
      title: 'Floor Installation',
      description: 'High-quality floor installation for a seamless look.',
      imgSrc: '/floor.png',
      imgAlt: 'Floor Installation Image',
      caption: 'High-quality floor installation'
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
          Our Services
        </motion.h2>
        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-8 text-[#D61210]">
            <motion.img
              src={service.imgSrc}
              alt={service.imgAlt}
              className="w-full md:w-1/3 h-auto md:h-48 object-cover rounded-md mb-4 md:mr-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            />
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md md:w-2/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#9a3412]">{service.title}</h3>
              <p className="text-[#D61210] mb-4">{service.description}</p>
              <p className="text-[#D61210]">{service.caption}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <section class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-8 bg-white shadow-lg">
    <div class="w-full lg:w-1/2">
        <img src="k3.png" alt="Kitchen Image" class="rounded-lg shadow-lg"/>
    </div>
    <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
        <div class="bg-gray-900 text-[#D61210] p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold mb-4">Kitchens</h2>
            <p class="text-lg">Welcome to Unique Kitchen and Bedrooms, where bespoke solutions exceed expectations. Our designers create custom designs reflecting your unique style. Elevate your kitchen with sleek handleless doors in various materials. Choose from contemporary to classic styles for a perfect fit. We use only high-quality materials for durability and beauty. Seamlessly integrate appliances for a cohesive look. Customize every aspect of your space to your liking. Our skilled craftsmen ensure precise installation.</p></div>
    </div>
</section>
<section class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-8 bg-white shadow-lg">
    
    <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
        <div class="bg-gray-900 text-[#D61210] p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold mb-4">Bedrooms</h2>
            <p class="text-lg">Experience luxury and comfort with our custom bedroom designs. From elegant wardrobes to cozy bed frames, we tailor every element to suit your taste and lifestyle. Our high-quality materials and meticulous craftsmanship ensure that your bedroom is not only beautiful but also functional and durable.</p>
        </div>
    </div>
    <div class="w-full lg:w-1/2 mt-10 md:mt-0">
        <img src="bed2.png" alt="Kitchen Image" class="rounded-lg shadow-lg"/>
    </div>
</section>
<section class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-8 bg-white shadow-lg">
    <div class="w-full lg:w-1/2">
        <img src="f1.png" alt="Kitchen Image" class="rounded-lg shadow-lg"/>
    </div>
    <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
        <div class="bg-gray-900 text-white p-8 rounded-lg shadow-lg text-[#D61210]">
            <h2 class="text-3xl font-bold mb-4">Living Area & Out Door</h2>
            <p class="text-lg">Transform your outdoor space into an extension of your home. Our custom outdoor solutions include patios, decks, pergolas, and outdoor kitchens. Using durable and weather-resistant materials, we create beautiful and functional outdoor areas that are perfect for entertaining and relaxation.</p>
        </div>
    </div>
</section>
    </section>
  );
};

export default Services;
