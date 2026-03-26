import React, { useEffect } from "react";
import { FaMobileAlt, FaLaptop, FaGem, FaTshirt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  { id: 1, name: "Electronics", icon: <FaLaptop /> },
  { id: 2, name: "Mobile", icon: <FaMobileAlt /> },
  { id: 3, name: "Jewelry", icon: <FaGem /> },
  { id: 4, name: "Fashion", icon: <FaTshirt /> },
];

const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-black mb-14"
          data-aos="fade-up"
        >
          Shop by <span className="text-pink-500">Categories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group cursor-pointer rounded-3xl border border-gray-200 p-8 text-center transition-all hover:bg-black hover:shadow-xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-pink-500/10 text-pink-500 text-3xl group-hover:bg-pink-500 group-hover:text-white transition-all">
                {cat.icon}
              </div>

              <h3 className="font-semibold text-lg text-black group-hover:text-white transition">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;