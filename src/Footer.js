import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-36">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/l.png" alt="Logo" className="h-20" />
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-[#D61210] hover:text-white">Home</a>
            <a href="/about" className="text-[#D61210] hover:text-white">About</a>
            <a href="/services" className="text-[#D61210] hover:text-white">Services</a>
            <a href="/ourworks" className="text-[#D61210] hover:text-white">Our Work</a>

            <a href="/contact" className="text-[#D61210] hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4 text-[20px]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-400 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
