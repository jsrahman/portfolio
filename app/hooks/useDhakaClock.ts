import { useEffect, useState } from "react";

function getDhakaTime(): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dhaka",
  }).format(new Date());
}

export function useDhakaClock(): string {
  const [time, setTime] = useState<string>(() => getDhakaTime());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(getDhakaTime());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return time;
}
