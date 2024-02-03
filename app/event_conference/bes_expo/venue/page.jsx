import React from "react";
import styles from "../../../about_bes/content.module.css";
export default function page() {
  return (
    <div
      className={
        "flex flex-col max-w-[800px] m-auto p-4 " + styles.content_container
      }
    >
      <h2 className="text-[26px] font-bold">Date & Venue</h2>

      <div>
        <p>
          <strong>BES EXPO 2024</strong> is being organized in Pragati Madan,
          New Delhi. Pragati Maidan is the biggest exhibition venue in India.
          Centrally located, it is only 10 minutes away from Connaught Place,
          heart of Delhi.
        </p>
      </div>
    </div>
  );
}
