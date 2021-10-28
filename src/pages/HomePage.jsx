import React, { useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import MovieCard from "../components/organisms/Movies/MovieCard";
import MoviCardSkeleton from "../components/organisms/Movies/MovieCardSkeleton";
import Footer from "../components/molecules/Footer";
import tmdbapi from "../api/tmdbapi";
import poster404 from "../assets/404-poster.jpg";
import priceGenerator from "../utils/priceGenerator";
import axios from "axios";

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

function HomePage() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsloading(true);
        let results = [];
        const res = await tmdbapi.get(`/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=ID`);
        res.data.results.map((movie) =>
          results.push({
            id: movie.id,
            title: movie.title,
            rating: movie.vote_average,
            poster: movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : poster404,
            genre: genreData.filter((genre) => movie.genre_ids.includes(genre.id)),
            price: priceGenerator(movie.vote_average),
          })
        );
        setMovieData(results);
        setTotalPage(res.data.total_pages);
        setIsloading(false);
        setPage((prev) => prev + 1);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  const loadMore = async () => {
    if (page <= totalPage) {
      try {
        let loadedMovies = [];
        const res = await tmdbapi.get(`/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2&region=ID`);
        res.data.results.map((movie) =>
          loadedMovies.push({
            id: movie.id,
            title: movie.title,
            rating: movie.vote_average,
            poster: movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : poster404,
            genre: genreData.filter((genre) => movie.genre_ids.includes(genre.id)),
            price: priceGenerator(movie.vote_average),
          })
        );
        setMovieData([...movieData, ...loadedMovies]);
        setPage((prev) => prev + 1);
      } catch (error) {}
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      return;
    }
    try {
      setIsloading(true);
      let results = [];
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${e.target[0].value}&page=1&include_adult=false`
      );
      res.data.results.map((movie) =>
        results.push({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          poster: movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : poster404,
          genre: genreData.filter((genre) => movie.genre_ids.includes(genre.id)),
          price: priceGenerator(movie.vote_average),
        })
      );
      e.target[0].value = "";
      setMovieData(results);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className="w-11/12 xl:w-8/12 mx-auto mt-8 lg:mt-24" style={{ minHeight: "100vh" }}>
        <section className="lg:w-6/12">
          <form className="w-full flex items-center gap-x-5 h-12" onSubmit={handleSubmit}>
            <input
              className="w-full h-full px-4 bg-gray-800 text-white text-lg outline-none rounded-sm"
              type="text"
              name="search"
              placeholder="Search Movie"
            />
            <button className="h-full px-4 font-semibold text-gray-800 bg-yellow-400 text-lg rounded-sm">Search</button>
          </form>
        </section>

        <h3 className="text-3xl font-bold text-white mt-8">NOW PLAYING</h3>
        <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {/* while loading render 10 skleton */}
          {isLoading
            ? Array(10)
                .fill(null)
                .map((r, i) => <MoviCardSkeleton key={i} />)
            : movieData?.map((movie) => (
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
        {page <= totalPage ? (
          <div className="flex justify-center mt-8">
            <button onClick={loadMore} className="bg-yellow-400 py-3 px-8 font-semibold">
              Load More
            </button>
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
