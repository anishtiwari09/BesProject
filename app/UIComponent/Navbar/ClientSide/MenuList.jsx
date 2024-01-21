"use client";
import React, { useState } from "react";
import MenuCompoenent from "./MenuComponent";
export default function MenuList({ data }) {
  const [open, setOpen] = useState(-1);
  return (
    <div className="flex">
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
