import { useEffect } from 'react';

export const useInterval = (intervalFunction, intervalMilliSeconds) => {
  useEffect(() => {
    setInterval(intervalFunction, intervalMilliSeconds);
  }, []);
};
