import { createSlice } from "@reduxjs/toolkit";

const item =
  localStorage.getItem("favorites") !== null
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

const initialState = {
  products: item,
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.products.push(newItem);
      }

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.products.map((item) => item))
      );
    },
  },
});

export const { addToFavourites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
