import React from "react";

export default function layout({ children }) {
  return (
    <div
      className="flex gap-[10px] p-4 bg-[#f2f2f2] flex-1 justify-between min-h-full"
      style={{
        backgroundImage: "url(https://www.besindia.co.in/images/BG_page.png)",
      }}
    >
      <div className="w-full">{children}</div>
      <div></div>
    </div>
  );
}
