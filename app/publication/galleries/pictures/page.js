import React from "react";
import galleryDb from "./galleriesdb.json";
import ImageRendering from "./ImageRendering";
import SelectBox from "./SelectBox";
export default function page(req) {
  console.log(req);

  let selectDb = galleryDb[0];
  let selectedValue = req.searchParams?.selectedValue;
  if (req.searchParams?.selectedValue) {
    selectDb = galleryDb.filter((item) => item.value == selectedValue)[0];
    selectDb = selectDb || galleryDb[0];
  }
  let allImagePath = [];
  try {
    const fs = require("fs");
    const path = require("path");
    allImagePath = fs.readdirSync(
      path.join(process.cwd(), `/public${selectDb?.folderPath}`)
    );
  } catch (e) {
    allImagePath = [];
    console.log(e);
  }

  return (
    <div>
      <SelectBox allImagePath={galleryDb} selectedValue={selectDb} />
      <ImageRendering path={selectDb?.folderPath} allImage={allImagePath} />
    </div>
  );
}
