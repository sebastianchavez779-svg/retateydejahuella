const DEFAULT_LAYOUT = Object.freeze({
  padding: "pt-[6%] pb-[76px]",
  justify: "justify-start",
  contentGap: "gap-6",
  titleClass: "title",
  bodyClass: "body",
  footerClass: "footer",
});

/**
 * @typedef {Object} SlideDefinition
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} footer
 * @property {"standard" | "fullBleed"} frame
 * @property {typeof DEFAULT_LAYOUT} layout
 * @property {(props: { slide: SlideDefinition }) => JSX.Element} Component
 */

/**
 * @param {Partial<SlideDefinition> & Pick<SlideDefinition, "id" | "Component">} definition
 * @returns {SlideDefinition}
 */
export function createSlide(definition) {
  const {
    id,
    title = "",
    subtitle = "",
    footer = "",
    frame = "standard",
    layout = {},
    Component,
  } = definition;

  return Object.freeze({
    id,
    title,
    subtitle,
    footer,
    frame,
    layout: Object.freeze({
      ...DEFAULT_LAYOUT,
      ...layout,
    }),
    Component,
  });
}

/**
 * @param {SlideDefinition[]} slides
 */
export function validateSlideRegistry(slides) {
  if (!Array.isArray(slides) || slides.length === 0) {
    throw new Error("La presentacion debe tener al menos un slide.");
  }

  const ids = new Set();

  slides.forEach((slide, index) => {
    if (!slide || typeof slide !== "object") {
      throw new Error(`El slide en la posicion ${index + 1} no es valido.`);
    }

    if (!slide.id || typeof slide.id !== "string") {
      throw new Error(`El slide en la posicion ${index + 1} no tiene un id valido.`);
    }

    if (ids.has(slide.id)) {
      throw new Error(`El id de slide "${slide.id}" esta duplicado.`);
    }
    ids.add(slide.id);

    if (slide.frame !== "standard" && slide.frame !== "fullBleed") {
      throw new Error(`El slide "${slide.id}" tiene un frame invalido.`);
    }

    if (typeof slide.Component !== "function") {
      throw new Error(`El slide "${slide.id}" no tiene un Component valido.`);
    }
  });
}

export { DEFAULT_LAYOUT };
