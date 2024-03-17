"use client";
import React, { useState } from "react";
import MenuCompoenent from "./MenuComponent";
import { isMobile } from "@/app/Utility/device";
import MobileMenuList from "./MobileMenu/MobileMenuList";

export default function MenuList({ data }) {
  const [open, setOpen] = useState(-1);
  return isMobile ? (
    <MobileMenuList data={data} />
  ) : (
    <div className="flex justify-center">
      {data?.map((item, key) => (
        <MenuCompoenent
          key={item.id}
          data={item}
          open={key === open}
          setOpen={setOpen}
          index={key}
        />
      ))}
    </div>
  );
}
