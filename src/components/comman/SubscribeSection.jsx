import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const SubscribeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative bg-black text-white py-20 sm:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Stay Updated with <span className="text-pink-500">MiniStore</span>
        </h2>
        <p className="text-gray-300 mb-10 text-lg md:text-md">
          Subscribe to our newsletter to get the latest products, deals, and offers straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-6 py-4 border-1 border-gray-500 rounded-full text-white focus:outline-none shadow-lg"
          />
          <Link
            to="/contact" // <-- the page you want to navigate to
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-2xl inline-block text-center"
          >
            Subscribe
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;