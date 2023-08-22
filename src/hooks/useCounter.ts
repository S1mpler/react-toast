import { useEffect, useMemo, useState } from "react";

type Props = {
  ms: number;
  reverse?: boolean;
}

export const useCounter = ({ ms, reverse = false }: Props): [number, boolean] => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  const tickInterval = 60;
  const max = 100;

  const calculatePercentageIncrement = useMemo((): number => {
    const targetPercentage = 100;
    const timeInSeconds = ms / 1000; // Convert time from milliseconds to seconds

    // Calculate the percentage increase required per X milliseconds
    const percentageIncrementPerInterval = (targetPercentage) / (timeInSeconds * 1000 / tickInterval);

    return percentageIncrementPerInterval;
  }, [ms]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= max) {
        clearInterval(interval)
        setDone(true);
      } else {
        setCount((c) => c + calculatePercentageIncrement);
      }
    }, tickInterval);
    return () => clearInterval(interval);
  }, [count, ms, tickInterval, calculatePercentageIncrement]);

  return [count, done];
}
