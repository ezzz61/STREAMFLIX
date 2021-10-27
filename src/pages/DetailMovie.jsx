import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "../components/atoms/Carousel";
import CastCard from "../components/organisms/Casts/CastCard";
import { getMovieDetails } from "../store/moviesSlice";
import { numberFormatter } from "../utils/numberFormatter";
import notfound404 from "../assets/404-poster.jpg";
import axios from "axios";

export default function DetailMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetails);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const movieId = id.split("-")[0];
    dispatch(getMovieDetails(movieId));
    setCasts([]);
    const getCasts = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setCasts(response.data.cast);
        console.log(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    getCasts();
  }, [id, dispatch]);

  return (
    <>
      <main className="w-11/12 xl:w-8/12 mx-auto mt-8 lg:mt-24">
        <section className="md:flex md:gap-x-5 lg:gap-x-10">
          {/* vover */}
          <div className="sm:w-5/12 md:w-4/12 lg:w-5/12">
            <img src={movie.poster} alt={movie.title} />
          </div>
          {/* detail */}
          <div className="w-12/12 md:w-8/12 lg:w-7/12 text-white">
            <div className="flex flex-col gap-y-2">
              <h1 className=" text-3xl font-bold">{movie.title}</h1>
              <span className=" font-semibold">RATING: {movie.rating}</span>
              <span className="text-gray-400 font-lightd">Duration: {movie.duration} m</span>
              <p className="text-gray-400 font-light">{movie.genre?.map((genre) => genre.name + " ")}</p>
              <p className="text-yellow-400 text-xl font-semibold">Price : {numberFormatter(movie.price)}</p>
            </div>
            <div className="mt-8">
              <h4 className="text-2xl font-semibold">OVERVIEW</h4>
              <p className="mb-8">{movie.overview}</p>
              <div className="flex gap-x-2 items-center">
                <Link to="/" className="bg-white text-gray-800 font-semibold text-lg py-2 px-4">
                  Back
                </Link>
                <Link to="/buy" className="bg-yellow-400 text-gray-800 font-semibold text-lg py-2 px-4" href="/">
                  Buy
                </Link>
              </div>
              {/* cast */}
              <div className="hidden xl:block w-11/12 lg:w-11/12 mx-auto">
                <Carousel title="Casts">
                  {casts?.map((cast) => (
                    <div className="pr-2 lg:pr-5">
                      <CastCard
                        name={cast.name}
                        character={cast.character}
                        image={cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : notfound404}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        <div className="xl:hidden w-11/12 lg:w-11/12 mx-auto">
          <Carousel title="Casts">
            {casts?.map((cast) => (
              <div className="pr-2 lg:pr-5">
                <CastCard
                  name={cast.name}
                  character={cast.character}
                  image={cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : notfound404}
                />
              </div>
            ))}
          </Carousel>
        </div>
        {/* <Carousel title="Smilar Movies">
          {smilarMovie.map((movie) => (
            <div className="pr-5">
              <MovieCard />
            </div>
          ))}
        </Carousel>
        <Carousel title="Popular Movies">
          {smilarMovie.map((movie) => (
            <div className="pr-5">
              <MovieCard />
            </div>
          ))}
        </Carousel> */}
      </main>
    </>
  );
}
