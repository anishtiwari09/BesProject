import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function EmailOtpLoader({ setIsOtpSend }) {
  const [count, setCount] = useState(300);
  useEffect(() => {
    let id = setInterval(() => {
      setCount((count) => {
        let temp = count - 1;
        if (temp <= 0) {
          clearInterval(id);
          setIsOtpSend(false);
        }
        return temp;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <Typography>
      {(() => {
        let mm = Math.floor(count / 60);
        let ss = count % 60;
        return `${mm.toString().padStart(2, "0")}:${ss
          .toString()
          .padStart(2, "0")}`;
      })()}
    </Typography>
  );
}
