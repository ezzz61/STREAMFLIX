import { createSlice } from "@reduxjs/toolkit";
import poster404 from "../assets/404-poster.jpg";
import priceGenerator from "../utils/priceGenerator";

const genreData = [
  { name: "Action", id: 28 },
  { name: "Adventure", id: 12 },
  { name: "Animation", id: 16 },
  { name: "Comedy", id: 35 },
  { name: "Crime", id: 80 },
  { name: "Documentary", id: 99 },
  { name: "Drama", id: 18 },
  { name: "Family", id: 10751 },
  { name: "Fantasy", id: 14 },
  { name: "History", id: 36 },
  { name: "Horror", id: 27 },
  { name: "Music", id: 10402 },
  { name: "Mystery", id: 9648 },
  { name: "Romance", id: 10749 },
  { name: "Science Fiction", id: 878 },
  { name: "TV Movie", id: 10770 },
  { name: "Thriller", id: 53 },
  { name: "War", id: 10752 },
  { name: "Western", id: 37 },
];

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    isError: false,
    movies: [
      {
        id: "",
        title: "",
        rating: null,
        poster: "",
        price: null,
      },
    ],
  },
  reducers: {
    setData(state, payload) {
      let moviesData = [];
      payload.payload.map((movie) =>
        moviesData.push({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          poster: movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : poster404,
          genre: genreData.filter((genre) => movie.genre_ids.includes(genre.id)),
          price: priceGenerator(movie.vote_average),
        })
      );
      state.movies = moviesData;
    },
    setIsloading(state, payload) {
      state.isLoading = payload.payload;
    },
    setError(state, payload) {
      state.isError = payload.payload;
    },
  },
});

export const moviesAction = moviesSlice.actions;
export default moviesSlice.reducer;
