import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total amount calculate
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 🔹 Empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 text-center">
          You haven’t added any products yet. Browse our shop to start adding items!
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="grid gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
            <img src={item.image} alt={item.title} className="h-20 w-20 object-contain"/>
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-green-600 font-bold">${item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => dispatch(decreaseQuantity(item))} className="px-2 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item))} className="px-2 bg-gray-200 rounded">+</button>
              </div>
            </div>
            <button onClick={() => dispatch(removeFromCart(item))} className="text-red-500 font-bold">X</button>
          </div>
        ))}
      </div>

      <h2 className="text-right mt-6 text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;