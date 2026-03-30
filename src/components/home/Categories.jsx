import React, { useEffect } from "react";
import { 
  FaLaptop,
  FaSoap,
  FaDumbbell,
  FaCouch
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; // <-- Import Link

const categories = [
  { id: 1, name: "Electronics", icon: <FaLaptop />, link: "shop" },
  { id: 2, name: "Personal Care", icon: <FaSoap />, link: "shop" },
  { id: 3, name: "Fitness & Sports", icon: <FaDumbbell />, link: "shop" },
  { id: 4, name: "Living Comforts", icon: <FaCouch />, link: "shop" },
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
          className="text-3xl md:text-4xl font-bold text-center text-black mb-14"
          data-aos="fade-up"
        >
          Shop By <span className="text-pink-500">Categories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {categories.map((cat, index) => (
            <Link
              to={cat.link}           // <-- Wrap card with Link
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;