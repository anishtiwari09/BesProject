import fs from "fs";
import path from "path";
export function getSliderImages() {
  const sliderImagesDir = path.join(
    process.cwd(),
    "public",
    "Images",
    "Slider",
    "2024"
  );
  return fs.readdirSync(sliderImagesDir);
}
