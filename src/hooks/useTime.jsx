import { useEffect, useState } from "react";

export const useTime = () => {
  let id = 0;

  const handleTime = () => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    return { hours, minutes, seconds };
  };

  const [time, setTime] = useState(handleTime());

  useEffect(() => {
    id = setInterval(() => {
      setTime(handleTime());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return [time];
};
