import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./slices/favourite";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
