import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ImageCarousel from './components/ImageCarousel';  
import Slider from 'react-slick';

const Home = () => {
  const images = [
    '/b.png',
    '/a.png',
    '/c.jpeg',
  ];

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const testimonials = [
    {
      quote: "We love our new kitchen! The design process was smooth, and the final product exceeded our expectations.",
      author: "Jane Doe"
    },
    {
      quote: "The team at Unique Kitchens and Bedrooms transformed our living space beyond our imagination. They were professional, creative, and detail-oriented.",
      author: "John Smith"
    },
    {
      quote: "“The team at UNIQUE KITCHENS AND ROOMS made the renovation process smooth and stress-free. Their professionalism and expertise are evident in every detail of our newly renovated space.",
      author: "S.Rajan"
    },
    // Add more testimonials as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="bg-gray-100">
      {/* Image Carousel */}
      <section className="h-760px">
        <ImageCarousel images={images} />
      </section>

      {/* Services Overview */}
      

      {/* Text and Contact */}
      <div className='md:flex mx-auto flex-row items-center justify-center p-14 md:px-20 mt-10'>
  <div className="flex flex-col items-left justify-left md:text-left md:text-left  mr-10 md:w-[80%] w-full" ref={textRef}>
    <motion.h2 className="md:text-6xl text-4xl font-bold text-[#D61210] mb-4 " initial={{ opacity: 0, y: -50 }} animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }} transition={{ duration: 1 }}>
      10 years of Experience
    </motion.h2>
    <motion.p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-black" initial={{ opacity: 0, x: -50 }} animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }} transition={{ duration: 1, delay: 0.5 }}>
      Client experiences with UNIQUE KITCHENS AND ROOMS are defined by transformative renovations that exceed expectations. From skilled artisans to attentive project management, every detail is meticulously crafted to bring clients' visions to life. Their client-centric approach ensures that each project reflects the individual style and needs of the homeowner.
    </motion.p>
    <motion.p className="mt-4 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-black" initial={{ opacity: 0, x: -50 }} animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }} transition={{ duration: 1, delay: 0.5 }}>
      With a focus on quality and budget management, UNIQUE KITCHENS AND ROOMS delivers seamless renovation experiences. Whether it's integrated interiors or stunning architectural designs, clients trust UNIQUE KITCHENS AND ROOMS to create spaces that truly reflect their lifestyle.
    </motion.p>
   
  </div>
  <div className='md:mt-0 md:text-left text-center mt-6 md:mt-0' ref={contactRef}>
    <motion.img src="/e.png" alt="Contact Image" className="w-full h-auto rounded-md mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : -50 }} transition={{ duration: 1 }} />
    
  </div>
</div>
<section className="py-12 mt-10">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold text-center mb-8 text-[#D61210]">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Kitchen Fitting Service Card */}
      <div className="bg-white relative overflow-hidden rounded-lg shadow-md">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("e.png")' }}></div>
        <div className="p-6 absolute bottom-0 left-0 right-0 bg-opacity-75 bg-gray-800 text-white">
          <h3 className="text-xl font-semibold mb-4">Kitchen Fitting</h3>
          <p className="text-gray-300">
            We create custom kitchen designs tailored to your space and style.
          </p>
        </div>
      </div>

      {/* Add more service cards */}
      <div className="bg-white relative overflow-hidden rounded-lg shadow-md">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("f.png")' }}></div>
        <div className="p-6 absolute bottom-0 left-0 right-0 bg-opacity-75 bg-gray-800 text-white">
          <h3 className="text-xl font-semibold mb-4 ">Bedrooms Fittings</h3>
          <p className="text-gray-300">
            Custom bookcases designed to fit your home library needs perfectly.
          </p>
        </div>
      </div>
      <div className="bg-white relative overflow-hidden rounded-lg shadow-md">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("g.png")' }}></div>
        <div className="p-6 absolute bottom-0 left-0 right-0 bg-opacity-75 bg-gray-800 text-white">
        <h3 className="text-xl font-semibold mb-4">Floor Installation</h3>
        <p className="text-gray-300">
          High-quality floor installation services for residential and commercial spaces.
          </p>
        </div>
      </div>

      {/* Add another service card */}
      

      {/* Add more service cards as needed */}
    </div>
  </div>
</section>


      {/* Featured Projects */}
      <section className="bg-gray-200 py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold text-center mb-8 text-[#D61210]">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1: Modern Kitchen */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/kitch.png"
          alt="Modern Kitchen"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-[#D61210]">Modern Kitchen</h3>
        <p className="text-gray-700">
          A sleek and modern kitchen design with custom cabinetry.
        </p>
      </motion.div>

      {/* Project 2: Modern Bedrooms */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img
          src="/bed.png"
          alt="Modern Bedrooms"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-[#D61210]">Modern Bedrooms</h3>
        <p className="text-gray-700">
          Contemporary bedroom designs that prioritize comfort and style.
        </p>
      </motion.div>

      {/* Project 3: Modern Floor Installation */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <img
          src="/floor.png"
          alt="Modern Floor Installation"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 text-[#D61210]">Modern Floor Installation</h3>
        <p className="text-gray-700">
          Install sleek and durable flooring options for a contemporary look.
        </p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section className="bg-black py-20 text-[#D61210]">
      <p class="text-[#D61210] text-center ">TESTIMONIALS</p>
      <div className="md:max-w-6xl mx-auto px-4 p-4">
        <motion.h2
          className="text-4xl font-semibold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className=" text-[#868686] italic mb-4">{`"${testimonial.quote}"`}</p>
              <p className="font-semibold text-[#868686]">{`- ${testimonial.author}`}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>

    <motion.section
      className="bg-gray-600  py-12 mt-10  text-white text-center p-4 md:p-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Ready to Transform Your Space?
      </motion.h2>
      <motion.p
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Contact us today to get started on your dream kitchen or bedroom.
      </motion.p>
      <motion.a
        href="/contact"
        className="bg-[#D61210] text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        Get in Touch
      </motion.a>
    </motion.section>
    </div>
  );
};

export default Home;
