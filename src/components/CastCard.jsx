import React from "react";

export default function CastCard() {
  return (
    <figure className="relative">
      <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bOGNsHlrswhyW79uvIHH1V43JI.jpg" alt="" />
      <div className="absolute py-2 px-2 w-full flex flex-col bottom-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 text-white">
        <h1 className="font-bold">Chris Evans</h1>
      </div>
    </figure>
  );
}
