import React, { useEffect } from "react";
import { FaLeaf, FaGift, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const reasons = [
  { id: 1, icon: <FaLeaf />, title: "Eco-Friendly", desc: "We prioritize sustainable and environmentally friendly products." },
  { id: 2, icon: <FaGift />, title: "Exclusive Offers", desc: "Get access to special deals and promotions just for you." },
  { id: 3, icon: <FaHeart />, title: "Customer Satisfaction", desc: "Your happiness is our priority with dedicated support." },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-14" data-aos="fade-up">
          Why Shop with <span className="text-pink-500">MiniStore</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-pink-50 rounded-3xl shadow-lg p-10 text-center hover:scale-105 transition-transform hover:shadow-2xl"
            >
              <div className="text-5xl text-pink-500 mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3 text-black">{item.title}</h3>
              <p className="text-gray-600 text-base md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
