import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(index === dropdownOpen ? null : index);
  };

  return (
    <nav className="nav bg-[#E3E5E4] shadow-md w-145px logo">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-xl">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/l.png" className="h-14" alt="Logo" />
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-black font-bold hover:text-[#D61210]">Home</Link>
            <Link to="/about" className="text-black font-bold hover:text-[#D61210]">About</Link>
            <div className="relative group">
              <button onClick={() => toggleDropdown(0)} className="text-black font-bold hover:text-[#D61210] flex items-center">
              <Link to="/services" className="text-black font-bold hover:text-[#D61210]">Services</Link>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 0 && (
                <div className="absolute left-0 mt-2 w-40 bg-[#D61210]  shadow-lg rounded-lg">
                  <Link to="/kitchenspage" className="block px-4 py-2 text-white hover:text-white">Kitchen</Link>
                  <Link to="/bedroompage" className="block px-4 py-2 text-white  hover:text-white">Bedrooms</Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button onClick={() => toggleDropdown(1)} className="text-black font-bold hover:text-[#D61210] flex items-center">
              <Link to="/ourworks" className="text-black font-bold hover:text-[#D61210]">Ourworks</Link>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 1 && (
                <div className="absolute left-0 mt-2 w-60 bg-[#D61210] shadow-lg rounded-lg">
                  <Link to="/wrayfield" className="block px-4 py-2 text-white hover:black">32 Wrayfield Rd</Link>
                  <Link to="/whittingtion" className="block px-4 py-2 text-white hover:black">108 Whittington AveHayes</Link>
                  <Link to="/pearclose" className="block px-4 py-2 text-white hover:black">13, Pear close, NW9 0LJ</Link>
                  <Link to="/slough" className="block px-4 py-2 text-white hover:black">Slough</Link>
                  <Link to="/wymouth" className="block px-4 py-2 text-white hover:black">Wymouth</Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-black font-bold hover:text-[#D61210]">Contact</Link>
            <div className="flex items-center space-x-4">
              <h4 className='text-black hover:text-[#D61210] space-x-4'>Call us: +07869514083</h4>
            </div>
            <div className="flex items-center space-x-6 text-black font-bold hover:text-[#D61210]">
              <CiFacebook />
              <CiInstagram />
              <CiTwitter />
              <CiLinkedin />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link to="/" className="text-black font-bold hover:text-[#D61210]">Home</Link>
              <Link to="/about" className="text-black font-bold hover:text-[#D61210]">About</Link>
              <div className="relative">
                <button onClick={() => toggleDropdown(0)} className="text-black font-bold hover:text-[#D61210] flex items-center justify-between w-full">
                <Link to="/ourworks" className="text-black font-bold hover:text-[#D61210]">Ourworks</Link>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen === 0 && (
                  <div className="mt-2 pl-4">
                  <Link to="/wrayfield" className="block px-4 py-2 text-[#D61210] hover:black">32 Wrayfield Rd</Link>
                  <Link to="/whittingtion" className="block px-4 py-2 text-[#D61210] hover:black">108 Whittington AveHayes</Link>
                  <Link to="/pearclose" className="block px-4 py-2 text-[#D61210] hover:black">13, Pear close, NW9 0LJ</Link>
                  <Link to="/slough" className="block px-4 py-2 text-[#D61210] hover:black">Slough</Link>
                  <Link to="/wymouth" className="block px-4 py-2 text-[#D61210] hover:black">Wymouth</Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button onClick={() => toggleDropdown(1)} className="text-black font-bold hover:text-[#D61210] flex items-center justify-between w-full">
                <Link to="/services" className="text-black font-bold hover:text-[#D61210]">Services</Link>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen === 1 && (
                  <div className="mt-2 pl-4">
                  <Link to="/kitchenspage" className="block px-4 py-2 text-[#D61210] hover:text-black">Kitchen</Link>
                  <Link to="/bedroompage" className="block px-4 py-2 text-[#D61210]  hover:text-black">Bedrooms</Link>
                  </div>
                )}
              </div>
              <Link to="/contact" className="text-black font-bold hover:text-[#D61210]">Contact</Link>
              <div className="flex items-center space-x-8 ">
                <CiFacebook className='text-3xl' size={0.1} />
                <CiInstagram />
                <CiTwitter />
                <CiLinkedin />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
