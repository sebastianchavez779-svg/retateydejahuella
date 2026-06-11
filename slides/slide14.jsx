import pilotoIndicadoresTitle from "../assets/Slide14-piloto-indicadores-title.png";
import { createSlide } from "./shared/createSlide";
import {
  AnimatedTitleImage,
  COLORS,
  FeatureBoard,
  SoftDecor,
} from "./shared/AnimatedTitleBoard";

const indicators = [
  {
    number: "01",
    title: "Adopcion",
    detail: "Acciones sostenibles registradas por usuario y categoria.",
    stat: "Habitos",
    accent: COLORS.lime,
  },
  {
    number: "02",
    title: "Trafico",
    detail: "Incremento de visitas hacia locatarios con insignia verde.",
    stat: "Flujo",
    accent: COLORS.green,
  },
  {
    number: "03",
    title: "Conversion",
    detail: "Compras realizadas despues de completar una accion sostenible.",
    stat: "Compra",
    accent: COLORS.cyan,
  },
  {
    number: "04",
    title: "Lealtad",
    detail: "Frecuencia mensual de visita contra la linea base actual de 2.1.",
    stat: "+2.1 meta",
    accent: COLORS.blue,
  },
];

function Slide14Component() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <SoftDecor />

      <AnimatedTitleImage src={pilotoIndicadoresTitle} alt="Piloto e indicadores" widthClass="w-[860px]" />

      <FeatureBoard
        badge="Piloto Salaverry"
        cardClass="h-[184px]"
        gridClass="grid-cols-4"
        items={indicators}
        title="Medimos adopcion, trafico, conversion y lealtad."
        topic="Piloto e indicadores"
        widthClass="w-[1080px]"
      />
    </div>
  );
}

export default createSlide({
  id: "slide14",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide14Component,
});
