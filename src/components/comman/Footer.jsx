import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import SubscribeSection from "./SubscribeSection";


const Footer = () => {
  return (
  <>
<SubscribeSection/>
    
    <footer className="bg-black text-gray-300 pt-20 pb-8 border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight mb-4">
            MINI<span className="text-pink-500">STORE</span>
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Your one-stop shop for trendy products. Style, quality and affordability — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-500 transition">About</Link></li>
            <li><Link to="/shop" className="hover:text-pink-500 transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Categories</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/shop?category=electronics" className="hover:text-pink-500 transition">Electronics</Link></li>
            <li><Link to="/shop?category=mobile" className="hover:text-pink-500 transition">Mobile</Link></li>
            <li><Link to="/shop?category=jewelry" className="hover:text-pink-500 transition">Jewelry</Link></li>
            <li><Link to="/shop?category=fashion" className="hover:text-pink-500 transition">Fashion</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 <span className="text-white font-semibold">MiniStore</span>. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
