import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const CountdownTimer = () => {
  // Calculate time left until the target date
  const calculateTimeLeft = () => {
    const targetDate = new Date("March 6, 2025 00:00:00").getTime();
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

  // Update the timer every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Format the timer display
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    const shortForm =
      interval === "days"
        ? "days"
        : interval === "hours"
        ? "hrs"
        : interval === "minutes"
        ? "mins"
        : "sec";

    timerComponents.push(
      <motion.div
        key={interval}
        initial={{ scale: 0.8, opacity: 0 }} // Initial animation state
        animate={{ scale: 1, opacity: 1 }} // Animate to this state
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
        className="flex flex-col items-center mx-1 sm:mx-2 md:mx-3"
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-transparent rounded-lg p-2 sm:p-3 md:p-4 shadow-lg border border-white border-opacity-20">
          {timeLeft[interval]}
        </div>
        <div className="text-sm sm:text-base md:text-lg text-white text-opacity-80 mt-1 sm:mt-2">
          {shortForm}
        </div>
      </motion.div>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Fade in and slide down
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
      className="mx-5 countdown-timer rounded-[1.2rem] py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 bg-transparent border border-white border-opacity-20 shadow-lg"
    >
      <div className="flex justify-center">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-opacity-80"
          >
            Time&apos;s up!
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;