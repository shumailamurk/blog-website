import React from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/background.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Dull background */}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Contact Us Now
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[rgba(0,0,5,0.5)] p-6 rounded-lg shadow-lg">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-lg text-yellow-400 font-semibold mb-2">
              First Name 
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full p-3 rounded-md border border-gray-300 text-yellow-400"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-lg font-semibold mb-2 text-yellow-400">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2 text-yellow-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold mb-2 text-yellow-400">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="phone Number"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label htmlFor="message" className="block text-lg font-semibold mb-2 text-yellow-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4} 
              placeholder="Enter here"
              className="w-full p-3 rounded-md border border-gray-300 text-yellow-400"
              required
            ></textarea>
          </div>

          {/* Terms and Conditions */}
          <div className="col-span-2 text-sm  mt-2 text-white">
            <p>
              By submitting this form, you agree to our terms and conditions and
              our privacy policy which explains how we may collect, use and disclose
              your personal information, including to third parties.
            </p>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
