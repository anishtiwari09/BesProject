import fs from "fs";
import path from "path";
export function getSliderImages(path2) {
  const sliderImagesDir = path.join(process.cwd(), "public", path2);
  return fs.readdirSync(sliderImagesDir);
}
