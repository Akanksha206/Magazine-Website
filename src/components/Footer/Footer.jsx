import React from 'react';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-black p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Left section - Company Info */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">CIOTIMES</h1>
          <p className="text-sm text-gray-300 mb-2 px-2">info@theciotimes.com</p>
          <p className="text-sm text-gray-300 mb-4 px-2">+1 (614) 467-0922</p>
          <div className="flex space-x-4 px-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-gray-300 hover:text-white" /></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-gray-300 hover:text-white" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-gray-300 hover:text-white" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-gray-300 hover:text-white" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-gray-300 hover:text-white" /></a>
          </div>
        </div>
        
        {/* Middle section - Quick Links and Legal */}
        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-semibold text-white mb-4">Legal</h2>
            <ul className="text-gray-300 space-y-2">
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="hover:underline">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="text-gray-300 space-y-2">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/magazines" className="hover:underline">Magazines</a></li>
              <li><a href="/advertise" className="hover:underline">Advertise with us</a></li>
              <li><a href="/contact" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Right section - Company Overview */}
        <div className="max-w-md">
          <h2 className="text-lg font-semibold text-white mb-4">Company Overview</h2>
          <p className="text-gray-300 text-sm">
            The business world is full of enigmatic stories waiting to be seen and heard. At CIO Times, we handpick such tales for the world to acknowledge. These stories speak not just of success, but also of the struggle hiding behind them. As one of the top business magazines, we share an insight into the inner workings of different business sectors, through inspiring stories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
