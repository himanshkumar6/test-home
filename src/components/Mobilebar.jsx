import { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative md:hidden flex justify-center mt-2">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-10 h-10 mx-5 md:mx-0 block"
      >
        {/* Hamburger Icon */}
        <IoReorderThreeOutline
          size={35}
          className={`absolute top-0 left-0 transition-all duration-300 ease-in-out 
            ${open ? 'opacity-0 scale-90 rotate-45' : 'opacity-100 scale-100 rotate-0'}`}
        />

        {/* Cross Icon */}
        <RxCross1
          size={35}
          className={`absolute top-0 left-0 transition-all duration-300 ease-in-out 
            ${open ? 'opacity-100 scale-80 rotate-0' : 'opacity-0 scale-90 -rotate-45'}`}
        />
      </button>
      {/* Dropdown Menu */}
      <div
        className={`absolute flex justify-center top-11 transform -translate-x-46 w-md rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden bg-white pl-10 border-1
          ${open ? 'max-h-screen opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'} origin-top`}
      >
        <div className="flex flex-col text-center space-y-4 py-5 text-black">
          <a href='' className='bg-white border-1 px-4 rounded-md'>Home</a>
          <a href='' className='bg-white border-1 px-4 rounded-md' >Services</a>
          <a href='' className='bg-white border-1 px-4 rounded-md'>Contact</a>
          <a href='' className='bg-white border-1 px-4 rounded-md'>About</a>
        </div>

      </div>
    </div>
  );
}
