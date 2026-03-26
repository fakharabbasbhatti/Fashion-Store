import React, { useEffect } from "react";
import { FaLaptop, FaMobileAlt, FaGem, FaTshirt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const trendingCategories = [
  { id: 1, name: "Electronics", icon: <FaLaptop />, image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHwwhttps://unsplash.com/photos/electronic-circuit-boards-near-tester-3GZi6OpSDcY" },
  { id: 2, name: "Mobile", icon: <FaMobileAlt />, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 3, name: "Jewelry", icon: <FaGem />, image: "https://media.istockphoto.com/id/2218969499/photo/grand-bazaar-istanbul-gold-jewelry-store-window-display.webp?a=1&b=1&s=612x612&w=0&k=20&c=C3W864H29RR1So36HcgEdsR7a53sZlL6BDkI18HWvD8=" },
  { id: 4, name: "Fashion", icon: <FaTshirt />, image: "https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
];

const TrendingByCategory = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-gray-50 py-30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-14" data-aos="fade-up">
          Trending <span className="text-pink-500">By Category</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trendingCategories.map((cat, index) => (
            <div
              key={cat.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              {/* Category Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>

              {/* Category Label */}
              <div className="absolute bottom-12 md:bottom-6 left-1/2 transform -translate-x-1/2 text-left text-white">
                <div className="text-5xl md:text-4xl mb-2">{cat.icon}</div>
                <h3 className="text-4xl md:text-xl font-bold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingByCategory;