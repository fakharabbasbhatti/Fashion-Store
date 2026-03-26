import React, { useEffect } from "react";
import { FaHeadset } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section
      className="relative min-h-[100vh] flex items-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative Blurs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-9xl mx-auto px-6 grid md:grid-cols-2 gap-50 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left" data-aos="fade-right">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get in Touch with <span className="text-pink-500">MiniStore</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
            Have a question, feedback, or need support? Our team is always ready to help you with fast and friendly assistance.
          </p>

          <Link
            to="/contact#form"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg"
            data-aos="zoom-in"
          >
            Send a Message
          </Link>
        </div>

        {/* Icon Decoration */}
        <div className="hidden md:flex justify-center" data-aos="fade-left">
          <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-pink-500 flex items-center justify-center">
              <FaHeadset className="text-white text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;