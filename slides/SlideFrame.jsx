export default function SlideFrame({ slide }) {
  const { Component, frame, layout } = slide;

  if (frame === "fullBleed") {
    return <Component slide={slide} />;
  }

  return (
    <div
      className={`relative flex h-full flex-col px-[6%] ${layout.padding} ${layout.justify}`}
    >
      <Component slide={slide} />
    </div>
  );
}
