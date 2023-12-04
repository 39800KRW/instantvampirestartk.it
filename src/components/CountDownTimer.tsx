import { FC, ReactNode, useEffect, useState } from 'react';

interface CalculatedResult {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDownTimer: FC<{
  target: Date;
}> = ({ target }) => {
  const calculateTimeLeft = (): CalculatedResult | {} => {
    const difference = +new Date(target) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [calculatedTimeLeft, setCalculatedTimeLeft] = useState<
    CalculatedResult | {}
  >(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCalculatedTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const hmsComponents: ReactNode[] = [];

  Object.keys(calculatedTimeLeft).forEach(_interval => {
    const interval = _interval as keyof CalculatedResult;

    if (!(calculatedTimeLeft as CalculatedResult)[interval]) {
      return;
    }

    hmsComponents.push(
      <>
        {(calculatedTimeLeft as CalculatedResult)[interval]
          .toString()
          .padStart(2, '0')}
      </>,
    );
  });

  return hmsComponents.length > 1 ? (
    hmsComponents.map((n, i) => (
      <>
        {i > 0 ? ':' : ''}
        {n}
      </>
    ))
  ) : hmsComponents.length ? (
    <>0:{hmsComponents[0]}</>
  ) : (
    <>0:00</>
  );
};

export default CountDownTimer;
