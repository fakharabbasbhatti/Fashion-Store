import React, { useEffect } from "react";
import { FaUsers, FaBoxOpen, FaSmile, FaShoppingCart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { id: 1, icon: <FaUsers />, number: "10K+", title: "Happy Customers" },
  { id: 2, icon: <FaBoxOpen />, number: "5K+", title: "Products Sold" },
  { id: 3, icon: <FaSmile />, number: "99%", title: "Positive Reviews" },
  { id: 4, icon: <FaShoppingCart />, number: "24/7", title: "Online Store" },
];

const Status = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
        {stats.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="flex flex-col items-center border border-gray-800 p-4 md:p-6 bg-gray-900/20 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="text-5xl text-pink-500 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{item.number}</h2>
            <p className="text-gray-300 text-lg md:text-base">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Status;
