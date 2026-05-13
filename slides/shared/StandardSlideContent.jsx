import { BRAND, styles } from "../../presentationConfig";

export function SlideTextBody({ slide }) {
  if (!slide.subtitle) {
    return null;
  }

  return (
    <p
      className={styles[slide.layout.bodyClass] || styles.body}
      style={{ color: BRAND.body }}
    >
      {slide.subtitle}
    </p>
  );
}

export default function StandardSlideContent({ slide, children }) {
  const content = children ?? <SlideTextBody slide={slide} />;

  return (
    <>
      <div className={`flex flex-col ${slide.layout.contentGap}`}>
        {slide.title ? (
          <h1
            className={styles[slide.layout.titleClass] || styles.title}
            style={{ color: BRAND.purple }}
          >
            {slide.title}
          </h1>
        ) : null}
        {content}
      </div>
      {slide.footer ? (
        <p
          className={styles[slide.layout.footerClass] || styles.footer}
          style={{ color: BRAND.body }}
        >
          {slide.footer}
        </p>
      ) : null}
    </>
  );
}

export function TextOnlySlide({ slide }) {
  return <StandardSlideContent slide={slide} />;
}
