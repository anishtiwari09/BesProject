"use client";
import React, { useEffect, useRef, useState } from "react";
export default function Countdown({ from }) {
  const [currentDate, setCurrentDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    second: 0,
  });
  const timerRef = useRef();
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      let currentDate = Date.now();
      let eventTime = new Date(from).getTime(); //Feb 16 , 2024 10:00:00 GMT+0530
      let difference = eventTime - currentDate - 60 * 60 * 1000 * 24;
      if (difference > 0) {
        let differenceDate = new Date(difference);
        let obj = {
          days: differenceDate.getDate(),
          hours: differenceDate.getHours(),
          minutes: differenceDate.getMinutes(),
          second: differenceDate.getSeconds(),
        };
        setCurrentDate(obj);
      } else {
        clearInterval(timerRef.current);
        setCurrentDate({
          days: 0,
          hours: 0,
          minutes: 0,
          second: 0,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div className="absolute z-[2] w-full  bottom-[-67px] ">
      <div className="coundown  px-[45px] py-[30px]">
        <div className="flex gap-1">
          <div>{currentDate.days.toString().padStart(2, "0")}</div>
          <div>:</div>
          <div>{currentDate.hours.toString().padStart(2, "0")}</div>
          <div>:</div>
          <div>{currentDate.minutes.toString().padStart(2, "0")}</div>
          <div>:</div>
          <div>{currentDate.second.toString().padStart(2, "0")}</div>
        </div>
      </div>
    </div>
  );
}
