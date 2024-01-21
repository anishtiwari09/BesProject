import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";

export default function Navbar() {
  return (
    <div className="flex flex-row gap-1">
      <Header1 />
      <Header2 />
    </div>
  );
}
