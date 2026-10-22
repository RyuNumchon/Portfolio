import { useEffect, useState } from "react";

export default function useClock() {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ss = (s: number) => s % 60;
  const mm = (s: number) => Math.floor(s < 3600 ? s / 60 : (s / 60) % 60);
  const hh = (s: number) => Math.floor(s / 3600);

  const formatted = `${String(hh(seconds)).padStart(2, "0")}:${String(
    mm(seconds)
  ).padStart(2, "0")}:${String(ss(seconds)).padStart(2, "0")}`;

  return { seconds, formatted };
}
