import Link from 'next/link';
import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="w-full h-16 bg-black flex items-center justify-between px-5">
     
        <ul className="flex text-yellow-400 font-medium gap-8 md:gap-20 text-lg mx-auto md:mx-20">
          <Link href={'/'}><li className='hover:underline'>Home</li></Link>
          <Link href={'/about'}><li className='hover:underline'>About</li></Link>
          <Link href={'/blog'}><li className='hover:underline'>Blog</li></Link>
          <Link href={'/contact'}><li className='hover:underline'>Contact</li></Link>
        </ul>

        {/* Social Media Icons and Search Bar  */}
        <div className="flex items-center gap-6 hidden md:flex"> 
          
       
          <div className="flex gap-6">
            <a href="https://www.instagram.com/codding_with_dr/" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="text-pink-600" size={30} />
            </a>
            <a href="https://www.linkedin.com/in/dr-shumaila-murk-9540112b9/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-400" size={30} />
            </a>
            <a href="https://github.com/shumailamurk" target="_blank" rel="noopener noreferrer">
              <GrGithub className="text-purple-400" size={30} />
            </a>
          </div>

      
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search here" 
              className="h-8 w-64 rounded-lg text-sm px-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
