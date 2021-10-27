import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { moviesAction } from "../store/moviesSlice";
import Search from "./Search";
import tmdbapi from "../api/tmdbapi";

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(moviesAction.setIsloading(true));
        const res = await tmdbapi.get(`/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=ID`);
        if (res.data) dispatch(moviesAction.setIsloading(false));
        console.log(res);
        dispatch(moviesAction.setData(res.data.results));
      } catch (error) {
        dispatch(moviesAction.setError(true));
      }
    };
    getData();
  }, [dispatch]);

  return (
    <main className="w-11/12 xl:w-8/12 mx-auto mt-8 lg:mt-24" style={{ minHeight: "100vh" }}>
      <div className="lg:w-6/12">
        <Search />
      </div>
      <h3 className="text-3xl font-bold text-white mt-8">NOW PLAYING</h3>
      <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            price={movie.price}
            image={movie.poster}
            genre={movie.genre}
            rating={movie.rating}
          />
        ))}
      </section>
    </main>
  );
}
