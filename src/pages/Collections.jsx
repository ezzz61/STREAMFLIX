import React, { useEffect, useState } from "react";
import Footer from "../components/molecules/Footer";
import MovieCard from "../components/organisms/Movies/MovieCard";

export default function Collections() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovie = localStorage.getItem("ownedMovies");
    if (getMovie) {
      setMovieData(JSON.parse(getMovie));
    }
  }, []);

  return (
    <>
      <main className="w-11/12 xl:w-8/12 mx-auto mt-8 lg:mt-24" style={{ minHeight: "60vh" }}>
        <h1 className="text-white text-2xl">My Collections</h1>
        <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {movieData.length ? (
            movieData?.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                price={movie.price}
                image={movie.poster}
                genre={movie.genre}
                rating={movie.rating}
              />
            ))
          ) : (
            <h1 className="text-white text-lg">No Collection Found</h1>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
