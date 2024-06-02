import { getProjectRoot } from "@/config";
import Countdown from "./UIComponent/Carousel/HomePage/Countdown";
import EventDetails from "./UIComponent/Carousel/HomePage/EventDetails";
import HomePageCarousel from "./UIComponent/Carousel/HomePage/HomePageCarousel";
import Notification from "./UIComponent/Carousel/HomePage/Notification";
import Partener from "./UIComponent/Carousel/HomePage/Partener";
import YoutubeThumbnail from "./UIComponent/Carousel/HomePage/YoutubeThumbnail";
import { HOMEPAGE } from "./Utility/Constant";
import { getSliderImages } from "./Utility/lib/file";

export default function Home() {
  const fs = require("fs");
  const path = require("path");
  let files = path.join(process.cwd(), "/public" + "/Images/Slider/2024");
  let data = getSliderImages() || [];

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute -translate-y-1/2 z-[3] top-1/2 w-full mobile_notification_css">
          <Notification />
        </div>
        <HomePageCarousel
          data={data}
          url={HOMEPAGE.sliderImageDir + HOMEPAGE.currentYear}
          path1={files}
        />
        <Countdown
          from={
            HOMEPAGE.expoStartDate.month +
            " " +
            HOMEPAGE.expoStartDate.date +
            " , " +
            HOMEPAGE.expoStartDate.year +
            " 10:00:00 GMT+0530"
          }
        />{" "}
      </div>

      <YoutubeThumbnail />

      <Partener />
      <EventDetails />
    </div>
  );
}
