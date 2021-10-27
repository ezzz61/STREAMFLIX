import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { getMovies } from "../../../store/moviesSlice";
import Search from "../../atoms/Search";
import MoviCardSkeleton from "./MovieCardSkeleton";

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies.data);
  const isLoading = useSelector((state) => state.movies.movies.isLoading);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <main className="w-11/12 xl:w-8/12 mx-auto mt-8 lg:mt-24" style={{ minHeight: "100vh" }}>
      <div className="lg:w-6/12">
        <Search />
      </div>
      <h3 className="text-3xl font-bold text-white mt-8">NOW PLAYING</h3>
      <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {/* while loading render 10 skleton */}
        {isLoading
          ? Array(10)
              .fill(null)
              .map((r, i) => <MoviCardSkeleton key={i} />)
          : movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
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
