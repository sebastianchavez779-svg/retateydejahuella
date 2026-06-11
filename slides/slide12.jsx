import impactoAmbientalTitle from "../assets/Slide12-impacto-ambiental-title.png";
import { createSlide } from "./shared/createSlide";
import {
  AnimatedTitleImage,
  COLORS,
  FeatureBoard,
  SoftDecor,
} from "./shared/AnimatedTitleBoard";

const impacts = [
  {
    number: "01",
    title: "Menos residuos",
    detail: "El reciclaje y las acciones responsables quedan visibles y medibles.",
    stat: "Ambiental",
    accent: COLORS.cyan,
  },
  {
    number: "02",
    title: "Mejores habitos",
    detail: "La gamificacion convierte la intencion sostenible en accion repetida.",
    stat: "Comportamiento",
    accent: COLORS.lime,
  },
  {
    number: "03",
    title: "Comunidad activa",
    detail: "Visitantes y locatarios participan en una misma narrativa de impacto.",
    stat: "Participacion",
    accent: COLORS.green,
  },
];

function Slide12Component() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <SoftDecor />

      <AnimatedTitleImage src={impactoAmbientalTitle} alt="Impacto ambiental" widthClass="w-[900px]" />

      <FeatureBoard
        badge="Impacto trazable"
        cardClass="h-[188px]"
        items={impacts}
        title="El impacto ambiental se vuelve una accion cotidiana."
        topic="Impacto ambiental"
      />
    </div>
  );
}

export default createSlide({
  id: "slide12",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide12Component,
});
