import React from "react";
import { Link } from "react-router-dom";
import { numberFormatter } from "../../../utils/numberFormatter";
import { useSelector } from "react-redux";

export default function MovieCard({ id, image, title, rating, genre, price }) {
  // ** change white space with "-"
  const titleSlug = title.replace(/\s/g, "-");
  const movieId = id + "-" + titleSlug;
  const ownedMovies = useSelector((state) => state.user.ownedMovies);
  const isOwned = ownedMovies.find((movie) => movie.id === id);

  return (
    <figure className="relative rounded-sm overflow-hidden">
      <img src={image} alt="" />
      <div className="lg:absolute w-full h-28 px-2 pt-2 flex flex-col bottom-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-gray-500 text-white">
        <h1 className="font-bold">
          <Link to={`/${movieId}`}>{title}</Link>
        </h1>
        <span className="text-yellow-400 font-semibold">{rating}</span>
        <span className="font-light text-gray-300">{genre?.map((g) => g.name + " ")}</span>
      </div>
      <div className="absolute top-0 right-0 bg-yellow-400 py-1 px-2 rounded-bl-xl">
        {rating === 0 ? (
          <h1 className="font-bold">COMING SOON</h1>
        ) : (
          <span className="text-gray-800 font-bold">{isOwned ? "OWNED" : `Rp ${numberFormatter(price)}`}</span>
        )}
      </div>
    </figure>
  );
}
