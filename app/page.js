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
  let data =
    getSliderImages(HOMEPAGE.sliderImageDir + HOMEPAGE.currentYear) || [];

  return (
    <div className="relative">
      <div className="relative">
        <div className="flex gap-2 flex-wrap py-[10px] px-[10px] pb-8 bg-[#FDD2FD]">
          <div className="max-w-[500px] mobile_notification_css">
            <Notification />
          </div>
          <div className="relative flex-1 min-w-[350px]">
            <HomePageCarousel
              data={data}
              url={HOMEPAGE.sliderImageDir + HOMEPAGE.currentYear}
              path1={""}
            />
          </div>
        </div>
      </div>

      <YoutubeThumbnail />

      <Partener />
      <EventDetails />
    </div>
  );
}
