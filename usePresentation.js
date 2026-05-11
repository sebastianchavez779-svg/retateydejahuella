import { useCallback, useEffect, useState } from "react";

function isTypingTarget(element) {
  if (!element) return false;
  const tagName = element.tagName?.toLowerCase();
  return element.isContentEditable || tagName === "input" || tagName === "textarea" || tagName === "select";
}

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

  useEffect(() => {
    const onKeyDown = (event) => {
      if (isTypingTarget(event.target)) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  return { current, next, prev, goTo };
}
