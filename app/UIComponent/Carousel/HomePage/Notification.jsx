import { Button } from "@mui/material";
import React from "react";
import BasicCarousel from "./BasicCarousel";
import Link from "next/link";
import { HOMEPAGE } from "../../../Utility/Constant";

export default function Notification() {
  return (
    <div>
      <BasicCarousel
        autoPlay={true}
        animation="slide"
        duration={500}
        cycleNavigation={true}
        indicators={false}
      >
        <React.Fragment>
          <h4 className="font-bold text-3xl text-white text-center m-auto w-[90%] ubuntu_font .conference_text conference_text emoisis_text">
            {HOMEPAGE.eventCount} International Conference & Exhibition on
            Broadcast & Media Technology
          </h4>
          <h3 className="font-bold text-4xl text-[#faac1d] text-center m-auto mt-6 conference_text conference_text2 text-shadow">
            {HOMEPAGE.expoStartDate.date}nd to {HOMEPAGE.expoEndDate.date}th{" "}
            {HOMEPAGE.expoEndDate.fullMonth} {HOMEPAGE.expoEndDate.year}
          </h3>
        </React.Fragment>
        <React.Fragment>
          <h4 className="font-bold text-3xl text-white text-center m-auto w-[90%] ubuntu_font  conference_text emoisis_text">
            {HOMEPAGE.eventCount} International Conference & Exhibition  on
            Broadcast & Media Technology
          </h4>
          <h3 className="font-bold text-4xl text-white text-center m-auto mt-6 conference_text conference_text2 text-shadow">
            {HOMEPAGE.expoStartDate.date}nd to {HOMEPAGE.expoEndDate.date}th{" "}
            {HOMEPAGE.expoEndDate.fullMonth} {HOMEPAGE.expoEndDate.year}
          </h3>
        </React.Fragment>
      </BasicCarousel>

      <h3 className="font-bold text-2xl text-white bg-[#ff008499] w-fit p-3 text-center m-auto mt-2 conference_text">
        Hall No. 12A at Pragati Maidan, New Delhi
      </h3>
      {/* <div className="text-xl text-white w-fit m-auto text-center mt-4">
        Evolving Media Ecosystem: Innovative, Immersive & Sustainable
        Broadcasting
      </div> */}
      <div className="mt-4 flex gap-2 justify-center">
        <a
          className="block w-fit py-[10px] px-3 bg-[#ffcc00] border-box  hover:bg-[#ec008c] delay-[300ms] transition-all text-black text-[15px] cursor-pointer hover:text-white"
          target="_blank"
          href="/pdf/others/bes_report_2024.pdf"
        >
          POST BES EXPO 2024 REPORT
        </a>
        <a
          className="block w-fit py-[10px] px-3 bg-[#ffcc00] border-box  hover:bg-[#ec008c] delay-[300ms] transition-all text-black text-[15px] cursor-pointer hover:text-white uppercase"
          target="_blank"
          href="/pdf/others/bes_event_presentation_20241.pdf"
        >
          BES Expo 2024 Presentation
        </a>
      </div>
      <a
        className="flex"
        href="/event_conference/bes_expo/exibition/participation_fee"
      >
        <Button
          variant="contained"
          className="flex w-fit m-auto mt-4 bg-[#222fda] text-[16px] font-[500] hover:bg-[#ffffff] hover:text-[#000]"
        >
          Book Your Space
        </Button>
      </a>

      <div className="flex gap-2 justify-center mt-4 registration_btn_container">
        <Link href={"/registrationform/visitor"}>
          <Button
            className="bg-orange-400 registration_btn"
            variant="contained"
            sx={{
              "&:hover": { background: "orange" },
            }}
          >
            Visitor Registration
          </Button>
        </Link>
        <Link href={"/registrationform/delegateregistration"}>
          <Button
            variant="contained"
            className="bg-orange-400 registration_btn"
            sx={{
              "&:hover": { background: "orange" },
            }}
          >
            Delegate Registration
          </Button>
        </Link>
      </div>
    </div>
  );
}
