import React from "react";

export default function Search() {
  return (
    <form className="w-full flex items-center gap-x-5 h-12">
      <input
        className="w-full h-full px-4 bg-gray-800 text-white text-lg outline-none rounded-sm"
        type="text"
        placeholder="Search Movie"
      />
      <button className="h-full px-4 font-semibold text-gray-800 bg-yellow-400 text-lg rounded-sm">Search</button>
    </form>
  );
}
