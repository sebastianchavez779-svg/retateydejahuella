import factibilidadTitle from "../assets/Slide13-factibilidad-title.png";
import { createSlide } from "./shared/createSlide";
import {
  AnimatedTitleImage,
  COLORS,
  FeatureBoard,
  SoftDecor,
} from "./shared/AnimatedTitleBoard";

const feasibility = [
  {
    number: "01",
    title: "Base tecnologica",
    detail: "App, loyalty, QR y data permiten iniciar sin crear un sistema nuevo.",
    stat: "Lista",
    accent: COLORS.cyan,
  },
  {
    number: "02",
    title: "Ecosistema activo",
    detail: "BI, marketing, sostenibilidad y locatarios ya tienen roles claros.",
    stat: "Alineado",
    accent: COLORS.blue,
  },
  {
    number: "03",
    title: "Piloto escalable",
    detail: "Salaverry valida KPIs antes de extender el modelo a otros malls.",
    stat: "Escalable",
    accent: COLORS.green,
  },
];

function Slide13Component() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <SoftDecor />

      <AnimatedTitleImage src={factibilidadTitle} alt="Factibilidad" widthClass="w-[820px]" />

      <FeatureBoard
        badge="No partimos de cero"
        cardClass="h-[188px]"
        items={feasibility}
        title="La solucion es viable porque aprovecha capacidades existentes."
        topic="Factibilidad"
      />
    </div>
  );
}

export default createSlide({
  id: "slide13",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide13Component,
});
