import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SubscribeSection from "./SubscribeSection";

const Footer = () => {
  return (
    <>
      <SubscribeSection />

      <footer className="bg-white text-black pt-16 pb-8 border-t border-gray-200 relative overflow-hidden">
        {/* Decorative pink blur */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 z-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4 text-black">
              MINI<span className="text-pink-500">STORE</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your one-stop shop for trendy products. Style, quality and affordability — all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-500 transition">About</Link></li>
              <li><Link to="/shop" className="hover:text-pink-500 transition">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-black font-bold uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-pink-500 transition">Electronics</Link></li>
              <li><Link to="/shop" className="hover:text-pink-500 transition">Personal Care</Link></li>
              <li><Link to="/shop" className="hover:text-pink-500 transition">Fitness & Sports</Link></li>
              <li><Link to="/shop" className="hover:text-pink-500 transition">Living Comforts</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-black font-bold uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/fakhar-abbas-bhatti/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/fakharabbasbhatti" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.tiktok.com/@fakharbhatti333/video/7598340117224230151?is_from_webapp=1&sender_device=pc&web_id=7608883868964292112" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-md z-10 relative">
          © 2026 <span className="text-black font-semibold">MiniStore</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
