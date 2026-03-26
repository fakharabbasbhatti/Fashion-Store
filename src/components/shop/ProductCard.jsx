import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      
      <img
        src={item.image}
        alt={item.title}
        className="h-40 mx-auto object-contain"
      />

      <h3 className="mt-4 text-lg font-semibold line-clamp-2">
        {item.title}
      </h3>

      <p className="text-green-600 font-bold mt-2">
        ${item.price}
      </p>

      <button
        onClick={() => dispatch(addToCart(item))}  // 🔥 Add to Cart action
        className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;