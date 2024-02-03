import React from "react";
import styles from "../../../about_bes/content.module.css";
export default function page() {
  return (
    <div
      className={
        "flex flex-col max-w-[800px] m-auto p-4 " + styles.content_container
      }
    >
      <h2 className="text-[26px] font-bold">Floor Plan</h2>

      <div>
        <p>
          <strong>BES EXPO 2024 </strong>is being organized at Pragati Maidan,
          New Delhi.
        </p>
      </div>
    </div>
  );
}
