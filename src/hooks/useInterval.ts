import React, { useEffect, useRef } from "react";

type IntervalCallback = () => void;

export const useInterval = (callback: IntervalCallback, delay: number | null): React.MutableRefObject<number | undefined> => {
  const intervalRef = useRef<number>();
  const callbackRef = useRef<IntervalCallback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);

      return () => clearInterval(intervalRef.current);
    }
  }, [delay]);
  
  return intervalRef;
};