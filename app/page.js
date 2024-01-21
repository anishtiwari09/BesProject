import Countdown from "./UIComponent/Carousel/HomePage/Countdown";
import EventDetails from "./UIComponent/Carousel/HomePage/EventDetails";
import HomePageCarousel from "./UIComponent/Carousel/HomePage/HomePageCarousel";
import Notification from "./UIComponent/Carousel/HomePage/Notification";
import Partener from "./UIComponent/Carousel/HomePage/Partener";
import YoutubeThumbnail from "./UIComponent/Carousel/HomePage/YoutubeThumbnail";

export default function Home() {
  const fs = require("fs");
  const path = require("path");
  let data = fs.readdirSync(
    path.join(process.cwd(), "/public/Images/Slider/2023")
  );

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute -translate-y-1/2 z-[3] top-1/2 w-full">
          <Notification />
        </div>
        <div
          className="absolute z-[2] top-0 bottom-0 left-0 right-0 opacity-50 bg-[rgba(28, 32, 110, 1)]"
          style={{
            background: "rgba(28, 32, 110, 0.5);",
          }}
        ></div>
        <HomePageCarousel data={data} url={"/Images/Slider/2023"} />
        <Countdown from={"Feb 16 , 2024 10:00:00 GMT+0530"} />
      </div>

      <YoutubeThumbnail />

      <Partener />
      <EventDetails />
    </div>
  );
}
