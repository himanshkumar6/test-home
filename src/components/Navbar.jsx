import React, { useState } from 'react';
import mylogo from '../assets/logo.png';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div className="flex justify-between items-center p-4 lg:mx-36 relative z-50">
        {/* Logo */}
        <div>
          <img src={mylogo} alt="Logo" className="h-12 md:h-20 lg:h-24" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-semibold text-lg gap-6 items-center">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <li
              key={item}
              className="relative text-black after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[150%] cursor-pointer hover:text-blue-900"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Get in Touch Button */}
        <a href="/" className="hidden md:block font-semibold border-[3px] px-6 py-2 text-base">
          Get in touch
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-[60] transition-transform duration-300 ease-in-out"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? (
              <RxCross1 size={30} className="text-black" />
            ) : (
              <IoReorderThreeOutline size={35} className="text-black" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/70 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8"
          >
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl font-semibold hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="/" className="mt-4 border-[2px] px-5 py-2 rounded font-semibold">
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
