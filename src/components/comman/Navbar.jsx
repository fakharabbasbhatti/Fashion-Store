import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // 🔥 Redux import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Redux state se cart items count
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-black">
          MINI<span className="text-pink-500">STORE</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-12 text-sm font-semibold uppercase tracking-wider text-black">
          {["Home", "About", "Shop", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="group-hover:text-pink-500 transition-colors duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative group">
            <FaShoppingCart className="text-xl text-black group-hover:text-pink-500 transition-colors" />

            {/* 🔥 Dynamic cart count */}
            <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-[10px] font-bold border-2 border-white group-hover:bg-pink-500 transition-all">
              {cartItems.length}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-6 gap-6 text-center font-bold uppercase tracking-wider">
          {["Home", "About", "Shop", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-pink-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;