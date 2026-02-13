"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      className={` w-full flex gap-4 p-2.5 justify-center items-center flex-row-reverse text-center font-semibold mt-3 rounded-xl  bg-gradient-to-r from-rose-200 via-pink-100 to-rose-50 text-gray-700

    opacity-85
    `}
    >
      <div>
        <div className={`text-4xl md:text-6xl ${styles.font}`}>
          {timeLeft.days}
        </div>
        <div className="text-sm md:text-lg">روز</div>
      </div>
      <div>
        <div className={`text-4xl md:text-6xl ${styles.font}`}>
          {timeLeft.hours}
        </div>
        <div className="text-sm md:text-lg">ساعت</div>
      </div>
      <div>
        <div className={`text-4xl md:text-6xl ${styles.font}`}>
          {timeLeft.minutes}
        </div>
        <div className="text-sm md:text-lg">دقیقه</div>
      </div>
      <div>
        <div className={`text-4xl md:text-6xl ${styles.font}`}>
          {timeLeft.seconds}
        </div>
        <div className="text-sm md:text-lg">ثانیه</div>
      </div>
    </div>
  );
}
