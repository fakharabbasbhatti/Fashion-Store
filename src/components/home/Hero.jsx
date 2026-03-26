import React, { useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="relative min-h-[95vh] flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-9xl mx-auto px-6 py-24 pt-25 md:pt-40 grid grid-cols-1 md:grid-cols-2 gap-50 items-center">
        {/* Left Content */}
        <div className="text-white" data-aos="fade-right">
          <div className="flex items-center gap-3 mb-6" data-aos="fade-down">
            <FaShoppingBag className="text-pink-500 text-3xl" />
            <span className="uppercase tracking-widest text-sm font-semibold text-pink-400">
              Trending Products
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            data-aos="fade-up"
          >
            Discover Your <br />
            <span className="text-pink-500">Perfect Style</span>
          </h1>

          <p
            className="text-gray-200 max-w-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Shop the latest fashion, electronics and lifestyle products with premium quality at affordable prices.
          </p>

          <div className="flex gap-4" data-aos="zoom-in" data-aos-delay="300">
            <Link
              to="/shop"
              className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border border-white px-8 py-4 rounded-full font-semibold text-white hover:bg-white hover:text-black transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div
          className="relative hidden md:flex justify-center"
          data-aos="fade-left"
        >
          <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-pink-500 flex items-center justify-center">
              <FaShoppingBag className="text-white text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
