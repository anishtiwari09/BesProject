import React from "react";
import styles from "./loader.module.css";
export default function PleaseWaitLoader() {
  return (
    <div className="flex justify-center">
      <img
        src={"/Images/Loader/gif/svg/spinner.svg"}
        alt="Spinner"
        style={{ maxHeight: "100px" }}
      />
    </div>
  );
}
