import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaDiscord, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Promo Section */}
      <div className="bg-white text-black py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          For the Best Gaming Experience, Visit GauravGo Games Technology
        </h2>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://play.google.com/store/apps/details?id=com.example.tomato" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/Google_Play.png" alt="Google Play Store" className="h-12 md:h-16 transition-transform transform hover:scale-105" />
          </a>
          <a href="https://apps.apple.com/app/id123456789" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/apple.png" alt="Apple App Store" className="h-12 md:h-16 transition-transform transform hover:scale-105" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-green-600">GauravGo</h2>
            <p className="mt-4 text-gray-400">
              GauravGo Games Technology is a pioneer in the gaming industry, dedicated to creating immersive and innovative gaming experiences. Our team of developers and designers strives to push the boundaries of gaming, delivering high-quality, engaging games that captivate players worldwide. Join us as we redefine the gaming landscape.
            </p>
            <div className="flex mt-4 space-x-4">
              {[
                { href: "#", icon: <FaFacebookF /> },
                { href: "#", icon: <FaTwitter /> },
                { href: "#", icon: <FaLinkedinIn /> },
                { href: "#", icon: <FaWhatsapp /> },
                { href: "#", icon: <FaDiscord /> },
                { href: "https://www.instagram.com/gauravgotechnologies?igsh=MTByeWp3a3k5MXp1NQ==", icon: <FaInstagram /> },
              ].map((link, index) => (
                <a key={index} href={link.href} className="text-green-400 hover:text-gray-100">
                  <div className="bg-gray-700 p-3 rounded-full transition-transform transform hover:scale-110">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gray-100">Home</a></li>
              <li><a href="#games" className="text-gray-400 hover:text-gray-100">Our Games</a></li>
              <li><a href="#advertisers" className="text-gray-400 hover:text-gray-100">Advertiser</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gray-100">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">7004017514</li>
              <li className="text-gray-400">hr.gauravgo@gmail.com</li>
            </ul>
            <div className="mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="w-full px-4 py-2 bg-green-600 rounded text-white hover:bg-green-700 transition-transform transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">Copyright 2024 © www.gauravgo.games - All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
