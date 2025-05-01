import MobileMenu from './Mobilebar'
import mylogo from '../assets/logo.png'


const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="flex justify-between lg:mx-36 items-center lg:justify-between m-[auto]">
        <div>
          <img src={mylogo} alt="Logo" className="md:h-20 h-15 lg:h-24" />
        </div>
        <div className="flex font-semibold text-lg">
          <ul className="flex">
            <a href="#"><li className="mx-3 relative text-black after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[150%] cursor-pointer hidden md:block hover:text-blue-900">Home</li></a>
            <a href="#"><li className="mx-3 relative text-black after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[150%] cursor-pointer hidden md:block hover:text-blue-900">Services</li></a>
            <a href="#"><li className="mx-3 relative text-black after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[150%] cursor-pointer hidden md:block hover:text-blue-900">About</li></a>
            <a href="#"><li className="mx-3 relative text-black after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[150%] cursor-pointer hidden md:block hover:text-blue-900">Contact</li></a>
          </ul>
        </div>
        <a href=""><h1 className="font-semibold border-[3px] md:px-6 md:py-2 px-5 mx-2 py-3.5 text-lg md:text-base hidden md:block">Get in touch</h1></a>
        {/* Mobile Menu Hamburger  */}
        <MobileMenu></MobileMenu>
      </div>
    </>
  )
}

export default Navbar