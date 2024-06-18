import { Button } from "@mui/material";
import React from "react";
import BasicCarousel from "./BasicCarousel";
import { HOMEPAGE } from "../../../Utility/Constant";
import Countdown from "./Countdown";

export default function Notification() {
  return (
    <div className="flex gap-4 items-center flex-col w-full">
      <React.Fragment>
        <h4 className="font-bold text-4 text-white text-center ubuntu_font .conference_text conference_text emoisis_text">
          {HOMEPAGE.eventCount} International Conference & Exhibition on
          Broadcast & Media Technology
        </h4>
        <h3 className="font-bold text-3xl text-[#faac1d] text-center conference_text conference_text2 text-shadow">
          {HOMEPAGE.expoStartDate.date}th to {HOMEPAGE.expoEndDate.date}nd
          {HOMEPAGE.expoEndDate.fullMonth} {HOMEPAGE.expoEndDate.year}
        </h3>
      </React.Fragment>

      <h3 className="font-bold text-xl text-white bg-[#ff008499] w-fit p-3 text-center conference_text">
        Hall No. 12A at Pragati Maidan, New Delhi
      </h3>
      {/* <div className="text-xl text-white w-fit m-auto text-center mt-4">
        Evolving Media Ecosystem: Innovative, Immersive & Sustainable
        Broadcasting
      </div> */}
      <div className="flex gap-2 justify-center">
        <a
          className="w-fit flex items-center font-bold p-2 bg-[#ffcc00] border-box  hover:bg-[#ec008c] delay-[300ms] transition-all text-black text-[12px] cursor-pointer hover:text-white"
          target="_blank"
          href="/pdf/others/bes_report_2024.pdf"
        >
          POST BES EXPO 2024 REPORT
        </a>
        <a
          className="w-fit flex items-center font-bold p-2 bg-[#ffcc00] border-box  hover:bg-[#ec008c] delay-[300ms] transition-all text-black text-[12px] cursor-pointer hover:text-white"
          target="_blank"
          href="/pdf/others/bes_event_presentation_20241.pdf"
        >
          BES Expo 2024 Presentation
        </a>
      </div>
{/* 
      <a className="flex w-fit" href="/pdf/others/INVITATIONWTD.pdf">
        <Button
          variant="contained"
          className="flex w-fit bg-[#008CBA] text-[16px] font-[500] hover:bg-[#ffffff] hover:text-[#000]"
        >
          INVITATION FOR WORLD TELECOM DAY-2024
        </Button>
      </a>
*/}
       <a className="flex" href="/event_conference/bes_expo/exibition/participation_fee">
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
      <Countdown
        from={
          HOMEPAGE.expoStartDate.month +
          " " +
          HOMEPAGE.expoStartDate.date +
          " , " +
          HOMEPAGE.expoStartDate.year +
          " 10:00:00 GMT+0530"
        }
      />
    </div>
  );
}
