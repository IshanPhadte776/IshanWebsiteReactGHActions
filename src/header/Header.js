import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Header() {
  return (
    <nav className="bg-black text-white shadow-md p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="text-xl mx-6 font-bold">Ishan Phadte</div>
        <div className="flex items-center space-x-4">

          <a
            href="mailto:IshanPhadte@gmail.com"
            className="flex items-center text-sm md:text-base hover:underline"
          >
            <MdEmail className="w-6 h-6 mr-2" />
            <span className="hidden md:inline">IshanPhadte@gmail.com</span>
          </a>

        
          
          <a
            href="https://github.com/IshanPhadte776"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            <FaGithub className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/ishanphadte/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            <FaLinkedin className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
