"use client";
import {
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useState } from "react";
import OpenImage from "./OpenImage";

export default function ImageRendering({ path, allImage, message, path1 }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };
  console.log({ selectedImage, allImage, message, path1, path });
  return (
    <div className="flex flex-col">
      <ImageList
        sx={{ width: "fit-content", padding: 5 }}
        cols={5}
        rowHeight={160}
        gap={20}
      >
        {allImage.map((item, index) => (
          <ImageListItem key={index} onClick={() => handleOpen(item)}>
            <img
              src={`${path}/${item}?w=164&h=164&fit=crop&auto=format`}
              alt={item}
              srcSet={`${path}/${item}?w=164&h=164&fit=crop&auto=format`}
              className="cursor-pointer"
              loading="lazy"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {open && (
        <OpenImage
          imageSrc={`${path}/${selectedImage}`}
          imageAlt={selectedImage}
          open={true}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
