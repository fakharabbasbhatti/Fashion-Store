import React, { useEffect, useState } from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";           // 🔥 Redux dispatch
import { addToCart } from "../../features/cart/cartSlice"; // 🔥 Cart slice

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); // 🔥 Redux dispatch

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6))) // show featured only
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-black mb-14"
        data-aos="fade-up"
      >
        Featured <span className="text-pink-500">Products</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all p-6 group"
          >
            <div className="relative h-52 mb-5 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="font-semibold text-lg text-black line-clamp-2 mb-2">
              {product.title}
            </h3>

            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-gray-300" />
            </div>

            <p className="text-xl font-bold text-black mb-4">${product.price}</p>

            {/* 🔥 Redux Add to Cart */}
            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-pink-500 transition-all"
            >
              <FaCartPlus />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;