import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    wallet: 100000,
    ownedMovies: [],
  },
  reducers: {
    wallet(state, { payload }) {
      state.wallet = payload;
    },
    ownedMovies(state, { payload }) {
      state.ownedMovies = payload;
    },
    buyMovie(state, { payload }) {
      state.wallet = state.wallet - payload.price;
      state.ownedMovies = [...state.ownedMovies, payload];
      console.log(state.ownedMovies);
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
