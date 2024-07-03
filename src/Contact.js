import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section>
      <div className="min-h-screen bg-gray-100">
        {/* Section 1: Company Intro */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-center p-8 bg-white shadow-md"
        >
         <h1 className="text-4xl font-bold mb-4 text-[#D61210]">Welcome to Unique Kitchens and Bedrooms</h1>
<p className="text-xl text-[#D61210]">Quality craftsmanship for all your bespoke kitchen and bedroom needs.</p>

        </motion.section>

        {/* Section 2: Contact Form with Background Image */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="relative bg-cover bg-center h-screen flex items-center justify-center" 
          style={{ backgroundImage: "url('/k1.png')" }} // Replace with your image path
        >
          <div className="bg-white bg-opacity-75 p-8 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#D61210]">Contact Us</h2>
            <form className="space-y-4 text-[#D61210]">
              <div>
                <label className="block text-lg">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-lg">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-lg">Message</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-md" rows="5"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-black text-white rounded-md w-full">Send</button>
            </form>
          </div>
        </motion.section>

        {/* Section 3: Address Information */}
        <div className='md:flex mx-auto flex-row items-center justify-center p-14 md:px-20'>
  <div className="flex flex-col items-left justify-left md:text-left text-center mr-10" ref={textRef}>
    <motion.h2 className="text-4xl font-bold text-[#D61210] mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }} transition={{ duration: 1 }}>
      UNIQUE KITCHENS & BEDROOMS
    </motion.h2>
    <motion.p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-[#D61210]" initial={{ opacity: 0, x: -50 }} animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }} transition={{ duration: 1, delay: 0.5 }}>
      Transforming homes with bespoke kitchen and bedroom designs tailored to your unique style and needs.
    </motion.p>
    <motion.p className="mt-4 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-[#D61210]" initial={{ opacity: 0, x: -50 }} animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }} transition={{ duration: 1, delay: 0.5 }}>
      With years of experience and a passion for excellence, we provide high-quality craftsmanship and personalized service to create your dream spaces.
    </motion.p>
    <motion.button className="mt-8 md:w-[20%] py-3 bg-black text-white text-center rounded-lg shadow-lg hover:bg-blue-700 transition duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <p className='ml-4'>Learn More</p>
    </motion.button>
  </div>
  <div className='md:mt-0 md:text-left text-center mt-6 md:mt-0' ref={contactRef}>
    <motion.h2 className="text-4xl font-bold text-[#D61210]" initial={{ opacity: 0, y: -50 }} animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : -50 }} transition={{ duration: 1 }}>
      CONTACT US
    </motion.h2>
    <motion.p className="text-lg text-[#D61210] mt-6" initial={{ opacity: 0, x: 50 }} animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : 50 }} transition={{ duration: 1, delay: 0.5 }}>
      Phone: +07869514083
    </motion.p>
    <motion.p className="text-lg text-[#D61210] mb-2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : 50 }} transition={{ duration: 1, delay: 1 }}>
      Email: sales@uniquekitchensandbedrooms.com
    </motion.p>
    <motion.p className="text-lg text-[#D61210] mb-2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : 50 }} transition={{ duration: 1, delay: 1.5 }}>
      Address: 13, Dean Road Sittingborn Kent Me102DG
    </motion.p>
  </div>
</div>


        {/* Section 4: Image and Text */}
        <div className='md:flex mx-auto flex-row items-center justify-center p-14 space-x-6'>
          <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="p-8 md:w-[80%] justify-center space-x-6"
          >
           <div className="flex flex-col md:flex-row">
  <img src="/b2.png" alt="Unique Kitchens and Bedrooms" className="space-x-6 w-full h-80 md:w-[50%] rounded-md shadow-md mb-4 md:mb-0 md:mr-4" />
  <div className="md:w-1/2 w-full">
    <p className="text-lg mt-12 ml-12 text-[#D61210] ">
      Welcome to Unique Kitchens and Bedrooms, your premier destination for bespoke kitchen and bedroom designs in the UK. With years of experience in the industry, our team of skilled designers and craftsmen provide high-quality, customized solutions to transform your home into a space that reflects your style and meets your needs.
    </p>
  </div>
</div>

          </motion.section>
        </div>

        {/* FAQ Section */}
        <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12 mb-12 pt-16 lg:pt-24 text-[#a16207]">
          <div className="grid grid-cols-1 gap-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                <div className="relative group w-14 h-14">
                  <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                  <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                    <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                      <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md"></div>
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
                        <path
                          d="M19 19H5V8H2L12 2L22 8H19V19ZM7 11V17H9V11H7ZM15 11V17H17V11H15Z"
                          fill="currentColor"
                          className="text-[#9a3412]"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#D61210]">High-Quality Craftsmanship</h3>
                  <p className="mt-1 text-base leading-7 text-[#D61210] dark:text-slate-400">
                    We take pride in our work, delivering high-quality carpentry services that meet your needs and exceed your expectations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                <div className="relative group w-14 h-14">
                  <div className="absolute inset-x-5 h-2 bottom-0 bg-cyan-400 blur-md opacity-50"></div>
                  <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-cyan-400 blur-md dark:opacity-80"></div>
                    <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                      <div className="absolute inset-x-4 h-4 -bottom-2 bg-cyan-400 blur-md"></div>
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
                        <path
                          d="M18 22H6V20H18V22ZM12 2L22 8V16C22 16.7956 21.6839 17.5587 21.1213 18.1213C20.5587 18.6839 19.7956 19 19 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V8L12 2ZM20 10H4V16H20V10ZM12 4.236L6.427 7.5H17.573L12 4.236Z"
                          fill="currentColor"
                          className="text-[#D61210]"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#D61210]">Custom Solutions</h3>
                  <p className="mt-1 text-base leading-7 text-[#D61210] dark:text-slate-400">
                    Whether you need a new staircase, built-in cupboards, or a complete kitchen remodel, we offer custom solutions tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                <div className="relative group w-14 h-14">
                  <div className="absolute inset-x-5 h-2 bottom-0 bg-amber-400 blur-md opacity-50"></div>
                  <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-amber-400 blur-md dark:opacity-80"></div>
                    <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                      <div className="absolute inset-x-4 h-4 -bottom-2 bg-amber-400 blur-md"></div>
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
                        <path
                          d="M21 8.60004L19.59 7.19004L18.53 8.25004L17.47 7.19004L16.06 8.60004L17.12 9.66004L16.06 10.72L17.47 12.13L18.53 11.07L19.59 12.13L21 10.72L19.94 9.66004L21 8.60004ZM12 9.50004C12 7.31004 13.79 5.52004 15.98 5.52004C16.24 5.52004 16.5 5.54004 16.75 5.60004L14.2 3.05004C13.6 2.45004 12.69 2.45004 12.09 3.05004L3.24 11.9C2.64 12.5 2.64 13.41 3.24 14.01L9.99 20.76C10.59 21.36 11.5 21.36 12.1 20.76L13.97 18.89C13.36 17.55 13.34 15.83 14.01 14.48C12.86 14.04 12 12.86 12 11.5V9.50004ZM8.19 13.27L7.12 14.34L5.71 12.93L12 6.64004L13.41 8.05004L8.19 13.27Z"
                          fill="currentColor"
                          className="text-[#9a3412]"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#D61210]">Satisfaction Guaranteed</h3>
                  <p className="mt-1 text-base leading-7 text-[#D61210] dark:text-slate-400">
                    We stand behind our work with a satisfaction guarantee, ensuring that you're happy with the results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default Contact;
