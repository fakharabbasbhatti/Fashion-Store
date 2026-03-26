
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // each item: {id, title, price, image, quantity}
  },
  reducers: {
    // Add to cart or increase quantity if already exists
    addToCart: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove item completely
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    // Increase quantity of an item
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity += 1;
    },

    // Decrease quantity or remove if quantity reaches 0
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        state.items = state.items.filter(i => i.id !== action.payload.id);
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;