import { createSlice } from "@reduxjs/toolkit";

const item =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const quantity =
  localStorage.getItem("quantity") !== null
    ? JSON.parse(localStorage.getItem("quantity"))
    : 0;

const totalPrice =
  localStorage.getItem("totalPrice") !== null
    ? JSON.parse(localStorage.getItem("totalPrice"))
    : 0;

const initialState = {
  products: item,
  quantity: quantity,
  totalPrice: totalPrice,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.products.push(newItem);
        state.quantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.totalPrice);
      }

      state.totalPrice = state.products.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.products.map((item) => item))
      );

      localStorage.setItem("quantity", JSON.stringify(state.quantity));

      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    removeFromCart: (state, action) => {
      const newItem = action.payload;
      state.quantity--;
      state.products = state.products.filter((item) => item.id !== newItem.id);

      state.totalPrice = Number(state.totalPrice) - Number(newItem.totalPrice);

      localStorage.setItem(
        "cart",
        JSON.stringify(state.products.map((item) => item))
      );

      localStorage.setItem("quantity", JSON.stringify(state.quantity));

      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    clearCart: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.totalPrice = 0;

      localStorage.setItem("cart", JSON.stringify(state.products));

      localStorage.setItem("quantity", JSON.stringify(state.quantity));

      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
