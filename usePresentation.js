import { useCallback, useEffect, useState } from "react";

export function usePresentation(slidesCount) {
  const safeSlidesCount = Number.isFinite(slidesCount) && slidesCount > 0 ? slidesCount : 1;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= safeSlidesCount) {
      setCurrent(0);
    }
  }, [current, safeSlidesCount]);

  const next = useCallback(() => {
    setCurrent((value) => (value + 1) % safeSlidesCount);
  }, [safeSlidesCount]);

  const prev = useCallback(() => {
    setCurrent((value) => (value - 1 + safeSlidesCount) % safeSlidesCount);
  }, [safeSlidesCount]);

  const goTo = useCallback(
    (index) => {
      if (index >= 0 && index < safeSlidesCount) {
        setCurrent(index);
      }
    },
    [safeSlidesCount],
  );

  return { current, next, prev, goTo };
}
