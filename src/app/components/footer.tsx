import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Dr Shumaila&apos;s Blog</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-3 rounded-md border border-gray-300"
            />
            <button className=" bg-[#e8c83d] text-black px-6 py-3 rounded-md font-semibold">
              Sign Up
            </button>
          </div>
          <p className="text-sm text-white mt-4">
            Contact Info <br /> Karachi, Pakistan
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Categories</h2>
          <ul className="space-y-2 text-white">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2 text-white">
            <li>Email: abc@gmail.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
           <div className="flex gap-6 mt-3">
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
        </div>


       
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Blog</h2>
          <ul className="space-y-2 text-white">
            <li>Explore the knowledge for health and fitness</li>
            <li>Empower yourself to live a stronger life</li>
            <li>Discover expert tips and workouts</li>
            <li>Nutrition advice for wellness goals</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-white text-sm">
        © 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
