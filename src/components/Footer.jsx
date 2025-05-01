const Footer = () => {
  return (
    <div className="h-40 w-auto text-white pt-10 md:pt-16 mt-3 items-center justify-center" id="footer" >
      <ul className="flex justify-center items-center space-x-4 text-white font-medium">
        <li className="flex items-center space-x-6">
          <a href=""><span>Home</span></a>
          <span className="border-r h-4 border-white" />
        </li>
        <li className="flex items-center space-x-6">
          <a href=""> <span>About Us</span></a>
          <span className="border-r h-4 border-white" />
        </li>
        <li className="flex items-center space-x-6">
          <a href=""><span>Services</span></a>
          <span className="border-r h-4 border-white" />
        </li>
        <li>
          <a href=""><span>Contact</span></a>
        </li>
      </ul>
      <div className="text-center py-6">&copy; Copyright 2025</div>
    </div>
  )
}

export default Footer
