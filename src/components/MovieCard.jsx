import React from "react";
import { Link } from "react-router-dom";
import { numberFormatter } from "../utils/numberFormatter";

export default function MovieCard({ image, title, rating, genre, price }) {
  return (
    <figure className="relative rounded-sm overflow-hidden">
      <img src={image} alt="" />
      <div className="absolute w-full h-28 px-2 pt-2 flex flex-col bottom-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-gray-500 text-white">
        <h1 className="font-bold">
          <Link to="/detail">{title}</Link>
        </h1>
        <span className="text-yellow-400 font-semibold">{rating}</span>
        <span className="font-light text-gray-300">{genre?.map((g) => g.name + " ")}</span>
      </div>
      <div className="absolute top-0 right-0 bg-yellow-400 py-1 px-2 rounded-bl-xl">
        <span className="text-gray-800 font-bold">Rp {numberFormatter(price)}</span>
      </div>
    </figure>
  );
}
