import React, { useEffect } from "react";
import { FaStore } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay decorations */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:pt-40 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-pink-500">MiniStore</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-6">
           MiniStore is your trusted online store offering a wide range of products including electronics, fashion, mobile devices, and jewelry. We ensure premium quality, fast delivery, and secure payment options to make your shopping experience smooth and enjoyable.
          </p>

          <Link
            to="/shop"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg"
            data-aos="zoom-in"
          >
            Explore Products
          </Link>
        </div>

        {/* Right Icon / Decoration */}
        <div data-aos="fade-left" className="hidden md:flex justify-center">
          <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-pink-500 flex items-center justify-center">
              <FaStore className="text-white text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;