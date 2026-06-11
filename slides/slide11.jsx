import impactoNegocioTitle from "../assets/slide11-impacto-negocio-title.png";
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
    title: "Frecuencia",
    detail: "Los visitantes regresan para acumular huellas y canjear beneficios.",
    stat: "Fidelizacion",
    accent: COLORS.cyan,
  },
  {
    number: "02",
    title: "Ventas",
    detail: "Las tiendas participantes reciben mas trafico con intencion de compra.",
    stat: "Locatarios",
    accent: COLORS.blue,
  },
  {
    number: "03",
    title: "Renta variable",
    detail: "El mayor movimiento comercial puede convertirse en captura de valor.",
    stat: "Negocio",
    accent: COLORS.green,
  },
  {
    number: "04",
    title: "Data",
    detail: "Cada accion revela habitos, categorias y campanas que funcionan mejor.",
    stat: "Inteligencia",
    accent: COLORS.lime,
  },
];

function Slide11Component() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <SoftDecor />

      <AnimatedTitleImage src={impactoNegocioTitle} alt="Impacto en el negocio" />

      <FeatureBoard
        badge="Negocio medible"
        cardClass="h-[184px]"
        gridClass="grid-cols-4"
        items={impacts}
        title="Sostenibilidad convertida en resultados de negocio."
        topic="Impacto en el negocio"
        widthClass="w-[1080px]"
      />
    </div>
  );
}

export default createSlide({
  id: "slide11",
  layout: {
    padding: "pt-[5.2%] pb-[24px]",
  },
  Component: Slide11Component,
});
