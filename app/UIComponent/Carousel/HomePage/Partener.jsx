import React from "react";
export default function Partener() {
  return (
    <div
      className="bg-[#f2f2f2]"
      style={{
        padding: "32px 10%",
      }}
    >
      <h1 className="text-center text-5xl font-bold mb-8">Supported By</h1>
      <div className="flex gap-4 flex-wrap justify-center partner_container">
        <div>
          <a href="http://www.drm.org" target="_blank">
            <img src="/Images/expo2020/EndorsedBy.jpg" border="0" />
          </a>
        </div>
        <div>
          <a href="http://www.abu.org.my" target="_blank">
            <img src="/Images/expo2020/Supported1-1.jpg" border="0" />
          </a>
        </div>

        <div>
          <a href="http://www.aesindia.org" target="_blank">
            <img src="/Images/expo2020/Supported2.jpg" border="0" />
          </a>
        </div>

        <div>
          <a href="http://www.prasarbharati.gov.in" target="_blank">
            <img src="/Images/expo2020/Supported4.jpg" border="0" />
          </a>
        </div>
        <div>
          <a href="http://www.sbe.org" target="_blank">
            <img src="/Images/expo2020/Supported5.jpg" border="0" />
          </a>
        </div>
        <div>
          <a href="http://ibfindia.com" target="_blank">
            <img src="/Images/expo2020/Supported6.jpg" border="0" />
          </a>
        </div>

        <div>
          <a href="https://www.broadcastandcablesat.co.in" target="_blank">
            {" "}
            <img src="/Images/expo2020/Media1.jpg" border="0" />
          </a>
        </div>
        <div>
          <a href="http://www.cinematographyart.org" target="_blank">
            <img src="/Images/expo2020/Media2.jpg" border="0" />
          </a>
        </div>
        <div>
          <a href="http://www.digitalstudioindia.com" target="_blank">
            <img src="/Images/expo2020/Media3.jpg" border="0" />
          </a>
        </div>
        <div>
          <a href="http://www.indiantelevision.com" target="_blank">
            {" "}
            <img src="/Images/expo2020/Media4.jpg" border="0" />
          </a>
        </div>
        <div>
          <a href="http://www.satiitv.com" target="_blank">
            {" "}
            <img src="/Images/expo2020/Media5.jpg" border="0" />
          </a>
        </div>
      </div>
    </div>
  );
}
