import React from "react";

export default function Header() {
  return (
    <section className="hidden lg:w-8/12 mx-auto lg:mt-24 lg:flex justify-between gap-x-20 items-center">
      <div className="lg:w-6/12">
        <h1 className="text-2xl lg:text-5xl font-bold text-white">
          <span className="text-yellow-400">THE BEST</span> ONLINE STREAMING MOVIE IN INDONESIA.
        </h1>
      </div>
      <div className="mt-4 lg:w-6/12 lg:mt-0 text-gray-400">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti similique recusandae, blanditiis et reprehenderit
          illo qui praesentium esse modi voluptatum exercitationem, sed provident perspiciatis labore consequuntur odit cum,
          reiciendis illum dolore placeat consectetur. Corporis id reiciendis dolore quibusdam deserunt officia!
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eum nihil commodi ducimus explicabo excepturi, est
          illum deleniti. Quae beatae maiores provident, laborum error nesciunt iure quaerat ad accusantium voluptas adipisci
          tempore consequuntur neque aspernatur repellendus.
        </p>
      </div>
    </section>
  );
}
