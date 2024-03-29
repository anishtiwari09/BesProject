"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
export default function HomePageCarousel({ data, url }) {
  return (
    <div>
      <Carousel
        autoPlay={true}
        animation={"slide"}
        indicators={null}
        key={data.id}
        stopAutoPlayOnHover={true}
        interval={5000}
      >
        {data?.map((item, key) => (
          <div className="w-full h-fit" key={item?.key}>
            <img
              src={`${url}/${item}`}
              className="w-full min-w-full object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
