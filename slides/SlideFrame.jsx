export default function SlideFrame({ slide, slidePhase }) {
  const { Component, layout } = slide;

  if (slide.id === "slide01" || slide.frame === "fullBleed") {
    return (
      <div className="relative h-full w-full">
        <Component slide={slide} slidePhase={slidePhase} />
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-full flex-col px-[6%] ${layout.padding} ${layout.justify}`}
    >
      <Component slide={slide} slidePhase={slidePhase} />
    </div>
  );
}
