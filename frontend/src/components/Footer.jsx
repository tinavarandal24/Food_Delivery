import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";

import { assets } from '../assets/frontend_assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer bg-gray-200 text-gray-700 px-6 md:px-20 py-10 mt-10 text-primary">
      {/* Footer Content Grid */}
      <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-18">
        {/* Left Section */}
        <div className="footer-content-left space-y-4">
          <img src={assets.logo} alt="logo" className="h-10" />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo omnis ad officiis similique, voluptates optio mollitia impedit maiores voluptatibus incidunt!
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-sm">
            <NavLink to= "/">
            <li className="cursor-pointer hover:text-red-500">Home</li></NavLink>
            <NavLink to= "/about">
            <li className="cursor-pointer hover:text-red-500">About Us</li></NavLink>
            <NavLink to="/placeorder">
            <li className="cursor-pointer hover:text-red-500">Delivery</li></NavLink>
            <li className="cursor-pointer hover:text-red-500">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}

        <div className="footer-content-right">
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 9913793794</li>
            <li>✉️ contact@tomato.com</li>
          </ul>

        </div>

        {/* last Section */}

        {/* Social Links Section just below contact */}
  
        <div className="">
          <p className="text-xl font-medium mb-2">Social Links</p>
          <div className="flex gap-4 text-xl text-gray-700">
            <FaInstagramSquare className="cursor-pointer hover:text-pink-500" />
            <IoLogoYoutube className="cursor-pointer hover:text-red-600" />
            <ImFacebook2 className="cursor-pointer hover:text-blue-600" />
          </div>

          {/* App Store Buttons */}
          <div className=" items-start sm:items-center gap-4 mt-4">
            <img
              src={assets.play_store}
              alt="Get it on Play Store"
              className="w-20 sm:min-w-30 cursor-pointer"
            />
            <img
              src={assets.app_store}
              alt="Download on App Store"
              className="w-32 sm:w-30 cursor-pointer"
            />
          </div>
        </div>

      </div>

      {/* Divider */}
      <hr className="my-6 border-t border-gray-400" />

      {/* Footer Bottom */}
      <p className="text-center text-sm text-gray-500">
        © tomato.com — All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
