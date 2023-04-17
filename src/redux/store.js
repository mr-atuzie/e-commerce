import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoriteSlice,
  },
});
