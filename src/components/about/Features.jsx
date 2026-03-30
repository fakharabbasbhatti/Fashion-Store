import React, { useEffect } from "react";
import { FaTruck, FaLock, FaHeadset } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  { id: 1, icon: <FaTruck />, title: "Fast Delivery", desc: "Quick and safe delivery at your doorstep within 24-48 hours" },
  { id: 2, icon: <FaLock />, title: "Secure Payment", desc: "100% secure and trusted payment methods including cards and e-wallets" },
  { id: 3, icon: <FaHeadset />, title: "24/7 Support", desc: "Friendly and knowledgeable support anytime you need help" },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto  px-6 grid md:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white rounded-3xl shadow-lg p-5 md:p-10 text-center hover:shadow-2xl transition-all"
          >
            <div className="text-5xl text-pink-500 mb-6 flex justify-center">
              {item.icon}
            </div>

            <h3 className="font-bold text-xl mb-3 text-black">
              {item.title}
            </h3>

            <p className="text-gray-600 text-base md:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
