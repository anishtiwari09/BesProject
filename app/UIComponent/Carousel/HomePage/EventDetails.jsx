import Image from "next/image";
import React from "react";

export default function EventDetails() {
  return (
    <div
      className="py-8"
      style={{
        background:
          "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
      }}
    >
      <div className="w-full flex  flex-col">
        <table className="w-fit m-auto">
          <tbody>
            <tr>
              <td className="p-2">
                <Image
                  width={609}
                  height={395}
                  src={"/Images/EventDetails/expo2025.jpg"}
                />
              </td>
              <td className="p-2">
                <Image
                  width={310}
                  height={395}
                  src={"/Images/EventDetails/bes5.jpg"}
                />
              </td>
            </tr>
            <tr className="border-b-2">
              <td
                colSpan={2}
                className="py-[10px] bg-[#6f9a37] font-bold text-white p-2"
              >
                Enquiry: For details regarding BES EXPO, please contact
              </td>
            </tr>
            <tr>
              <td className="p-2 font-bold text-[#1e1f36] event_details_text">
                For Conference: The Chairman Conference Committee
                <br />
                BES EXPO, 912 Surya Kiran Building
                <br />
                19 Kasturba Gandhi Marg, New Delhi-110001
                <br />
                Tel: 91-11-23316709
                <br />
                E-mail: conference@besindia.com, bes@besindia.com
              </td>
              <td className="p-2 font-bold text-[#1e1f36] event_details_text">
                For Exhibition: The Coordinator BES EXPO
                <br />
                E-mail: exhibition@besindia.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
