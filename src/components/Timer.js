import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2023-12-27T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = now - startDate;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeElapsed({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <h2 className="timer-title">Tempo juntos</h2>
      <div className="timer-display">
        <div className="time-unit">
          <span className="time-number">{timeElapsed.days}</span>
          <span className="time-label">dias</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-number">
            {timeElapsed.hours.toString().padStart(2, "0")}
          </span>
          <span className="time-label">horas</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-number">
            {timeElapsed.minutes.toString().padStart(2, "0")}
          </span>
          <span className="time-label">min</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <span className="time-number">
            {timeElapsed.seconds.toString().padStart(2, "0")}
          </span>
          <span className="time-label">seg</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
