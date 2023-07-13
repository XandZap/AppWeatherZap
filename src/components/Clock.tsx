"use client";
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(format(new Date(), "HH:mm aaa"));

  const refreshClock = useCallback(() => setDate(format(new Date(), "HH:mm aaa")), []);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 60000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [refreshClock]);

  return <p className="text-right text-sm max-sm:-mt-4">{date}</p>;
}

export default Clock;

