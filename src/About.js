import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-gray-100 py-12 text-[#D61210]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-[#D61210]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        {/* Section: Our Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="/floor.png"
              alt="Our Team"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#D61210]">Our Team</h3>
            <p className="text-gray-700">
              Our team of expert designers and craftsmen collaborate to create beautiful kitchens and bedrooms tailored to your needs.
            </p>
          </motion.div>
          <motion.p
            className="text-lg text-[#D61210] self-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            At Unique Kitchens and Bedrooms, our team is the backbone of our success. With years of expertise and a passion for design, they ensure every project is executed to perfection.
          </motion.p>
        </div>

        {/* Section: Our Workshop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.p
            className="text-lg text-[#D61210] self-center order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Our state-of-the-art workshop is where we bring your custom designs to life with precision and quality, using the latest tools and technology.
          </motion.p>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img
              src="/k1.png"
              alt="Our Workshop"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#D61210]">Our Workshop</h3>
            <p className="text-[#D61210]">
              Equipped with state-of-the-art tools and machinery, our workshop is where the magic happens.
            </p>
          </motion.div>
        </div>

        {/* Section: Our Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img
              src="/b2.png"
              alt="Our Mission"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#D61210]">Our Mission</h3>
            <p className="text-gray-700">
              To deliver high-quality, bespoke kitchen and bedroom solutions that transform spaces and exceed client expectations.
            </p>
          </motion.div>
          <motion.p
            className="text-lg text-[#D61210] self-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Our mission is to provide exceptional kitchen and bedroom designs that enhance the beauty and functionality of your home. We strive to exceed your expectations with every project.
          </motion.p>
        </div>

        {/* Section: Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.p
            className="text-lg text-[#D61210] self-center order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Integrity, quality, and customer satisfaction are the core values that drive us. We are committed to providing a seamless experience from design to installation.
          </motion.p>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img
              src="/k9.png"
              alt="Our Values"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#D61210]">Our Values</h3>
            <p className="text-gray-700">
              We uphold the highest standards of integrity, quality, and customer satisfaction in all our projects.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="bg-gray-200 py-12 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/f.png"
                alt="Interior Design"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Interior Design</h3>
              <ul className="text-gray-700">
                <li>✓ Bespoke Kitchen Design</li>
                <li>✓ Custom Bedroom Solutions</li>
                <li>✓ Space Optimization</li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/c.png"
                alt="Exterior Design"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Exterior Design</h3>
              <ul className="text-gray-700">
                <li>✓ Contemporary Designs</li>
                <li>✓ High-Quality Materials</li>
                <li>✓ Lasting Durability</li>
              </ul>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <img
                src="/g.png"
                alt="Industrial Premises"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Commercial Spaces</h3>
              <ul className="text-gray-700">
                <li>✓ Modern Design</li>
                <li>✓ Unique Foundation</li>
                <li>✓ Smart Heating System</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
