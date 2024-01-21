import footerData from "./Utility/footerdb.json";
import React from "react";
export default function Footer() {
  return (
    <div className="bg-black opacity-80 py-4">
      <div className="w-[96%] m-auto">
        {footerData.map((item, key) => (
          <React.Fragment key={item.id}>
            <div className="flex gap-4 mt-2">
              <h3 className="text-white min-w-[150px] text-left">
                {item.name}:{" "}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {item.subTopic.map((sub_item, sub_key) => (
                  <div key={sub_item.id} className="text-white">
                    {sub_item.name}{" "}
                    {sub_key + 1 < item.subTopic.length ? " | " : ""}
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
