import slide01 from "./slide01.jsx";
import slide02 from "./slide02.jsx";
import slide03 from "./slide03.jsx";
import slide04 from "./slide04.jsx";
import slide05 from "./slide05.jsx";
import slide06 from "./slide06.jsx";
import slide07 from "./slide07.jsx";
import slide08 from "./slide08.jsx";
import slide09 from "./slide09.jsx";
import slide10 from "./slide10.jsx";
import slide11 from "./slide11.jsx";
import slide12 from "./slide12.jsx";
import slide13 from "./slide13.jsx";
import slide14 from "./slide14.jsx";
import slide15 from "./slide15.jsx";
import { validateSlideRegistry } from "./shared/createSlide";

export const slides = Object.freeze([
  slide01,
  slide02,
  slide03,
  slide04,
  slide05,
  slide06,
  slide07,
  slide08,
  slide09,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
]);

export function validateSlides() {
  validateSlideRegistry(slides);
}

if (import.meta.env.DEV) {
  validateSlides();
}
