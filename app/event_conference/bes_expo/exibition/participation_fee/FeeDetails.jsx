import React from "react";
import styles from "@/app/about_bes/content.module.css";
export default function FeeDetails() {
  return (
    <div
      className={"flex flex-col max-w-[800px] p-4 " + styles.content_container}
    >
      <h2 className="text-[26px] font-bold">Participation Fee </h2>
      <br />
      <h4 className="font-bold">
        Participation fee for Indian and foreign exhibitors is as follows
      </h4>
      <br />
      <div className="flex gap-12">
        <div>
          <h5 className="font-bold " style={{ fontStyle: "italic" }}>
            Indian companies
          </h5>
          <div>
            <div>
              <i> Scheme: </i>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.
              13,000 per sqm <br />
              <i>Raw Space:</i>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.
              12,000 per sqm <br />
              <i>Open to sky space:</i> &nbsp;Rs. 6,000 per sqm
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-bold " style={{ fontStyle: "italic" }}>
            Foreign companies
          </h5>
          <div>
            <div>
              <i> Scheme: </i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;US$
              375 per sqm <br />
              <i>Raw Space:</i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              US$ 300 per sqm <br />
              <i>Open to sky space:</i> &nbsp;US$ 165 per sqm
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <strong>GST @ 18% is applicable in all categories of space</strong>
      </div>
    </div>
  );
}
