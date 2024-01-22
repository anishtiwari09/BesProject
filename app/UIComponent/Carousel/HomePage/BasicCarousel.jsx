"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";

export default function BasicCarousel(props) {
  const { children, ...rest } = props;
  return (
    <>
      <Carousel {...rest}>{children}</Carousel>
    </>
  );
}
