import React from "react";
import galleryDb from "./galleriesdb.json";
import ImageRendering from "./ImageRendering";
import SelectBox from "./SelectBox";
import { getProjectRoot } from "@/config";
export default function page(req) {
  console.log(req);

  let selectDb = galleryDb[0];
  let selectedValue = req.searchParams?.selectedValue;
  if (req.searchParams?.selectedValue) {
    selectDb = galleryDb.filter((item) => item.value == selectedValue)[0];
    selectDb = selectDb || galleryDb[0];
  }
  let allImagePath = [];
  let message = "no message";
  let path1 = "";
  try {
    const fs = require("fs");
    const path = require("path");
    let directory =
      process.env.enviroment === "production" ? "/vercel/path0" : process.cwd();
    path1 = getProjectRoot();
    allImagePath = fs.readdirSync(
      path.join(directory, `/public${selectDb?.folderPath}`)
    );
  } catch (e) {
    allImagePath = [];
    console.log(e);
    message = e?.message || "something went wrong";
  }

  return (
    <div>
      <SelectBox allImagePath={galleryDb} selectedValue={selectDb} />
      <ImageRendering
        path={selectDb?.folderPath}
        allImage={allImagePath}
        message={message}
        path2={path1}
      />
    </div>
  );
}
