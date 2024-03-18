"use client";
import React, { useState } from "react";
import MenuCompoenent from "./MenuComponent";
import { isMobile } from "../../../Utility/device";
import MobileMenuList from "./MobileMenu/MobileMenuList";

export default function MenuList({ data }) {
  let isMobileTest = useMemo(() => {
    if(typeof window==="object")
    isMobile(window);
  }, []);
  const [open, setOpen] = useState(-1);
  return isMobileTest  ? (
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
