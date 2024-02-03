import React from "react";
import styles from "../../../about_bes/content.module.css";
export default function page() {
  return (
    <div
      className={
        "flex flex-col max-w-[800px] m-auto p-4 " + styles.content_container
      }
    >
      <h2 className="text-[26px] font-bold">Official Hotel</h2>
    </div>
  );
}
