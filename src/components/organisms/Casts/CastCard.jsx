import React from "react";

export default function CastCard({ name, character, image }) {
  return (
    <figure className="relative transition-all">
      <img src={image} alt="" />
      <div className="flex md:absolute py-2 px-2 w-full flex-col bottom-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 text-white">
        <span className="text-sm">{character}</span>
        <p className="font-bold text-sm">{name}</p>
      </div>
    </figure>
  );
}
