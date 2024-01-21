import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";

export default function Navbar() {
  return (
    <div className="flex flex-row gap-1 items-end bg-[#101130]">
      <Header1 />
      <Header2 />
    </div>
  );
}
