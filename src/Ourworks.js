// src/pages/OurWork.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen',
    description: 'A sleek and stylish modern kitchen with high-end finishes.',
    imageUrl: '/kitch2.png',
  },
  {
    id: 2,
    title: 'Elegant Bedroom',
    description: 'An elegant bedroom design with custom-made furniture.',
    imageUrl: '/bed3.png',
  },
  {
    id: 3,
    title: 'Contemporary Kitchen',
    description: 'A contemporary kitchen featuring state-of-the-art appliances.',
    imageUrl: '/kitch1.png',
  },
  {
    id: 4,
    title: 'Luxury Bedroom',
    description: 'A luxurious bedroom with bespoke storage solutions.',
    imageUrl: '/bed4.png',
  },
  // Add more projects as needed
];
const project = [
    {
      id: 2,
      title: '32 Wrayfield Rd',
      description: 'Discover our kitchen design project at 32 Wrayfield Rd.',
      imageUrl: '/black2.jpeg',
      link: '/services/kitchens/32-wrayfield-rd',
    },
    {
      id: 3,
      title: '108 Whittington Ave, Hayes',
      description: 'See our work on kitchen designs at 108 Whittington Ave, Hayes.',
      imageUrl: '/wh2.jpeg',
      link: '/services/kitchens/108-whittington-ave',
    },
    {
      id: 4,
      title: '13 Pear Close, NW9 0LJ',
      description: 'Check out our elegant bedroom design at 13 Pear Close, NW9 0LJ.',
      imageUrl: '/p.jpeg',
      link: '/pearclose',
    },
    {
      id: 5,
      title: 'Slough',
      description: 'Luxury bedroom designs at Slough.',
      imageUrl: '/s2.jpeg',
      link: '/slough',
    },
    {
      id: 6,
      title: 'Weymouth',
      description: 'Our bedroom design project at Weymouth.',
      imageUrl: '/y2.jpeg',
      link: '/services/bedrooms/weymouth',
    },
    // Add more projects as needed
  ];

const OurWorks = () => {
  return (
    <section>
    <div className="container mx-auto py-12 p-10">

      <h1 className="text-4xl font-bold mb-8 text-center text-[#D61210]">Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover" />
            <div className="p-4 bg-white">
              <h2 className="text-2xl font-bold mb-2 text-[#D61210]">{project.title}</h2>
              <p className="text-lg text-[#D61210]">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {project.map((project) => (
          <motion.div 
            key={project.id} 
            className="shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover" />
            <div className="p-4 bg-white">
              <h2 className="text-2xl font-bold mb-2 text-[#D61210]">{project.title}</h2>
              <p className="text-lg text-[#D61210]">{project.description}</p>
              <Link 
                to={project.link} 
                className="inline-block mt-4 bg-black text-[#D61210] px-4 py-2 rounded-lg shadow hover:bg-[#7f2a0d] transition duration-300"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
