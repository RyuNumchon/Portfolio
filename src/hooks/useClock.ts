import { useEffect, useState } from 'react';

export default function useClock() {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let mounted = true;
    const tick = () => setSeconds(s => s + 1);
    // start with 0, but emulate original code which immediately increments once
    tick();
    const id = setInterval(tick, 1000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const ss = (s: number) => s % 60;
  const mm = (s: number) => Math.floor(s < 3600 ? s / 60 : (s / 60) % 60);
  const hh = (s: number) => Math.floor(s / 3600);

  const formatted = `${String(hh(seconds)).padStart(2, '0')}:${String(mm(seconds)).padStart(2, '0')}:${String(ss(seconds)).padStart(2, '0')}`;

  return { seconds, formatted };
}
