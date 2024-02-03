import React from "react";
import db from "./db.json";
import SideNavMap from "./SideNavMap";
import styles from "../../../about_bes/SideNav/side.module.css";

export default function SideNav() {
  return (
    <div
      className={"bg-[#faac1d] text-white p-4 sticky top-4 " + styles.sideNav}
    >
      <h3 className="font-bold text-[24px] text-black">{""}</h3>
      <SideNavMap db={db || []} parentPath={"/event_conference/bes_expo"} />
    </div>
  );
}
