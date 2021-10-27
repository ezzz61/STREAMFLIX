import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import poster404 from "../assets/404-poster.jpg";
import priceGenerator from "../utils/priceGenerator";
import tmdbapi from "../api/tmdbapi";

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

export const getMovies = createAsyncThunk("movies/getMovies", async (state, dispatch) => {
  try {
    const res = await tmdbapi.get(`/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=ID`);
    const data = res.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getMovieDetails = createAsyncThunk("movies/getMovieDetails", async (id, dispatch) => {
  try {
    const res = await tmdbapi.get(`/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

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
    movieDetails: {},
  },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      let moviesData = [];
      action.payload.map((movie) =>
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
    [getMovies.rejected]: (state, action) => {
      state.isError = true;
    },
    [getMovieDetails.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMovieDetails.fulfilled]: (state, action) => {
      const data = action.payload;
      state.movieDetails = {
        id: data.id,
        title: data.original_title,
        genre: data.genres,
        rating: data.vote_average,
        poster: data.poster_path ? `http://image.tmdb.org/t/p/w500/${data.poster_path}` : poster404,
        overview: data.overview,
        duration: data.runtime,
        price: priceGenerator(data.vote_average),
      };
    },
    [getMovieDetails.rejected]: (state, action) => {
      state.isError(true);
    },
  },
});

export const moviesAction = moviesSlice.actions;
export default moviesSlice.reducer;
