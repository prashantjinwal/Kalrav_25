import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('March 6, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    const shortForm = interval === 'days' ? 'days' : interval === 'hours' ? 'hrs' : interval === 'minutes' ? 'mins' : 'sec';

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {shortForm}{`${shortForm ==='sec'?' ':': '}`}
      </span>
    );
  });

  return (
    <div className="mx-auto countdown-timer rounded-[1.2rem] py-2 px-4 text-white text-lg font-dm-sans border border-pink-600  w-fit bg-white bg-opacity-20">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountdownTimer;