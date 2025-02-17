import { useEffect, useState } from "react";

export const useDebounce = (value: string | number, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string | number>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
