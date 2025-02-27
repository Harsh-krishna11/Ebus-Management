import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBus
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-5 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-10">
        {/* Logo & Description */}
        <div>
          <FaBus className="text-3xl text-blue-600" />
          <p className="text-gray-400 leading-6">
            Your trusted online bus ticket booking platform. Travel smart, book
            with ease, and enjoy a hassle-free journey with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-lg font-semibold mb-4">Quick Links</p>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <p className="text-lg font-semibold mb-4">Customer Support</p>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <p className="text-lg font-semibold mb-4">Get in Touch</p>
          <ul className="text-gray-400">
            <li>+1-800-123-4567</li>
            <li>support@ebus.com</li>
            <li>123 Main St, New York, NY</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <FaFacebookF
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <FaTwitter
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <FaInstagram
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <FaLinkedinIn
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        <hr className="border-gray-700 mb-4" />
        <p>Copyright 2024 © eBus Management - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
