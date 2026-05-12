export default {
  title: 'GIA',
  subtitle: 'Inteligencia aplicada a decisiones contables',
  footer: 'Piloto IA – Contabilidad 2025',
  visualType: 'hero',
  layout: {
    padding: 'pt-[8%] pb-[96px]',
    justify: 'justify-start',
    titleStyle: 'title',
    showFooter: false,
  },
  ui: {
    sectionPadding: 'pt-[8%] pb-[96px]',
    sectionJustify: 'justify-start',
    titleStyle: 'title',
    bodyClass: 'body',
    footerClass: 'footer',
    showFooter: false,
    heroLogoClass: 'w-[50%] min-w-[460px] max-w-[760px]',
    heroAnimation: {
      initial: { scale: 0.86, y: -180, rotate: -2 },
      animate: { scale: [0.86, 1.06, 0.97, 1], y: [-180, 24, -10, 0], rotate: [-2, 1.2, -0.5, 0] },
      transition: { duration: 0.95, delay: 0.15, times: [0, 0.62, 0.84, 1], ease: [0.22, 1, 0.36, 1] },
    },
  },
};
