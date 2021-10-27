import React from "react";
import Navbar from "../components/Header/Navbar";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import CastCard from "../components/CastCard";
import Logo from "../components/Header/Logo";

export default function DetailMovie() {
  const smilarMovie = ["", "", "", "", "", "", ""];
  const casts = ["", "", "", "", "", "", ""];

  return (
    <>
      <header className="w-11/12 lg:w-8/12 mx-auto mt-5">
        <Navbar />
      </header>
      <main className="w-11/12 lg:w-8/12 mx-auto mt-8 lg:mt-24">
        <section className="lg:flex lg:gap-x-10">
          <div className="sm:w-5/12 lg:w-5/12">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb1ede65688027.5afcac81af5e6.jpg" alt="" />
          </div>
          <div className="w-12/12 lg:w-7/12 text-white">
            <div className="flex flex-col gap-y-2">
              <h1 className=" text-3xl font-bold">AVENGER: INGINITY WAR</h1>
              <span className=" font-semibold">RATING: 8.1</span>
              <span className="text-gray-400 font-lightd">Duration: 120 m</span>
              <p className="text-gray-400 font-light">Action, Comedy</p>
              <p className="text-yellow-400 text-xl font-semibold">Price : 20.000</p>
            </div>
            <div className="mt-8">
              <h4 className="text-2xl font-semibold">OVERVIEW</h4>
              <p className="mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis et tempora quaerat architecto quam
                temporibus suscipit ipsa iste deserunt ipsum. Asperiores quidem fuga deleniti! Asperiores neque ipsa vel at
                impedit esse, tempora, mollitia voluptates id, eum expedita dolore eveniet in?
              </p>
              <div className="flex gap-x-2 items-center">
                <Link to="/" className="bg-white text-gray-800 font-semibold text-lg py-2 px-4">
                  Back
                </Link>
                <Link to="/buy" className="bg-yellow-400 text-gray-800 font-semibold text-lg py-2 px-4" href="/">
                  Buy
                </Link>
              </div>
              <div className="w-11/12 lg:w-11/12 mx-auto">
                <Carousel title="Casts">
                  {casts.map((cast) => (
                    <div className="pr-2 lg:pr-5">
                      <CastCard />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
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
      <footer className="mt-24 py-8 bg-gray-700">
        <div className="w-11/12 lg:w-8/12 mx-auto">
          <Logo />
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, eveniet aperiam! Tempora, necessitatibus dolorem non
            minima quis voluptatum culpa fuga saepe dicta molestiae quidem. Autem obcaecati maiores quas repellendus dolorum.
          </p>
        </div>
      </footer>
    </>
  );
}
