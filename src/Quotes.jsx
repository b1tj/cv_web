import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

function Quotes() {
  const quotes = [
    {
      quote: "Don't compare your Chapter 1 to someone else's Chapter 20.",
      author: "Anonymous",
    },
    {
      quote:
        "No matter how slow you're, just moving forward, next time you turn around you'll see how far you have gone.",
      author: "Anonymous",
    },
    {
      quote: "Life begins at the end of your comfort zone.",
      author: "Neale Donald Walsch",
    },
  ];

  return (
    <section className="bg-section-grey py-12 font-sans-serif">
      <div className="mx-auto w-[1170px]   ">
        <Swiper
          style={{ "--swiper-pagination-color": "#2ecc71" }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          rewind={true}
          modules={[Pagination, Autoplay]}
          className="flex items-center justify-center"
        >
          {quotes.map((quote, index) => {
            return (
              <SwiperSlide key={index} className=" text-center font-serif">
                <p className="mx-auto max-w-4xl text-2xl italic text-description">
                  {quote.quote}
                </p>
                <h3 className="mb-[30px] mt-5 text-[20px] font-bold text-heading">
                  - {quote.author} -
                </h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Quotes;
