import { Button } from "@mui/material";
import React from "react";

export default function Notification() {
  return (
    <div>
      <h4
        className="font-bold text-3xl text-white text-center m-auto w-[90%]"
        style={{ lineHeight: "normal" }}
      >
        28th International Conference & Exhibition on Broadcast & Media
        Technology
      </h4>
      <h3 className="font-bold text-4xl text-white text-center m-auto mt-6">
        15th to 17th February 2024
      </h3>
      <h3 className="font-bold text-2xl text-white bg-[#ff008499] w-fit p-3 text-center m-auto mt-2">
        Hall No. 12A at Pragati Maidan, New Delhi
      </h3>
      <div className="text-xl text-white w-fit m-auto text-center mt-4">
        Evolving Media Ecosystem: Innovative, Immersive & Sustainable
        Broadcasting
      </div>
      <h2 className="mt-4 font-bold text-4xl text-center m-auto text-white">
        {" "}
        Book Your Space
      </h2>
      <div className="flex gap-2 justify-center mt-4">
        <Button
          className="bg-orange-400"
          variant="contained"
          sx={{
            "&:hover": { background: "orange" },
          }}
        >
          Visitor Registration
        </Button>
        <Button
          variant="contained"
          className="bg-orange-400"
          sx={{
            "&:hover": { background: "orange" },
          }}
        >
          Delegate Registration
        </Button>
      </div>
    </div>
  );
}
