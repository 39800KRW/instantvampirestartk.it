'use client';

import { FC, useCallback, useEffect, useState } from 'react';

interface CalculatedResult {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDownTimer: FC<{
  target: Date;
}> = ({ target }) => {
  const calculateTimeLeft = useCallback((): CalculatedResult => {
    const difference = +new Date(target) - +new Date();
    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, []);

  const [calculatedTimeLeft, setCalculatedTimeLeft] =
    useState<CalculatedResult>();

  useEffect(() => {
    const timer = setInterval(() => {
      setCalculatedTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {calculatedTimeLeft
        ? `${calculatedTimeLeft.minutes
            .toString()
            .padStart(2, '0')}:${calculatedTimeLeft.seconds
            .toString()
            .padStart(2, '0')}`
        : '00:00'}
    </>
  );
};

export default CountDownTimer;
