"use client";
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import moment from "moment";

export function Timer() {
  const [disabledTimer, setDisabledTimer] = useState<boolean>(false);
  const [timerDays, setTimerDays] = useState<string>("00");
  const [timerHours, setTimerHours] = useState<string>("00");
  const [timerMinutes, setTimerMinutes] = useState<string>("00");
  const [timerSeconds, setTimerSeconds] = useState<string>("00");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (
    countDownDate: Date = moment("01-01-2025", "DD-MM-YYYY").toDate()
  ) => {
    intervalRef.current = setInterval(() => {
      const now = moment().toDate();
      const distance = countDownDate.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(days.toString().padStart(2, "0"));
        setTimerHours(hours.toString().padStart(2, "0"));
        setTimerMinutes(minutes.toString().padStart(2, "0"));
        setTimerSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return (
    <div className="font-sans text-base ">
      <h3 className="scroll-m-20 font-medium tracking-tight text-[#928F8F]">
        Launch in:
      </h3>
      <p className="text-green dark:text-white">
        {timerDays} days : {timerHours} Hrs : {timerMinutes} Mins :{" "}
        {timerSeconds} Secs
      </p>
    </div>
  );
}
