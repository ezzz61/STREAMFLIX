import React from "react";
import Slider from "react-slick";

export default function Carousel({ title, children, xs, sm, md, lg, xl, xxl }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: xxl ? xxl : 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: xs ? xs : 3,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: sm ? sm : 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: md ? md : 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: lg ? lg : 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: xl ? xl : 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <section className="mt-8 po">
      <h1 className="mt-12 mb-8 text-3xl font-bold text-white">{title}</h1>
      <Slider {...settings}>{children}</Slider>
    </section>
  );
}
