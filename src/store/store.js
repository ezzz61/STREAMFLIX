import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    movies: moviesSlice,
    user: userSlice,
  },
});
