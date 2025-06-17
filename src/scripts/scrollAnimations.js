import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrar plugin
gsap.registerPlugin(ScrollTrigger);

// Animaciones al hacer scroll

export function initScrollAnimations() {
  // 👉 Solo ejecutar en pantallas de escritorio (>=768px)
  if (window.innerWidth < 768){
    console.log("telefono");
    return;
  }
  console.log("escritorio");
    


  const animations = [
    {
      selector: ".fade-in",
      props: (el) => ({
        opacity: 0,
        y: 30,
      }),
    },
    {
      selector: ".zoom-in",
      props: (el) => ({
        opacity: 0,
        scale: 0.95,
      }),
    },
    {
      selector: ".slide-left",
      props: (el) => ({
        opacity: 0,
        x: -50,
      }),
    },
    {
      selector: ".slide-right",
      props: (el) => ({
        opacity: 0,
        x: 50,
      }),
    },
    {
      selector: ".slide-up",
      props: (el) => ({
        opacity: 0,
        y: 50,
      }),
    },
    {
      selector: ".slide-down",
      props: (el) => ({
        opacity: 0,
        y: -50,
      }),
    },
    {
      selector: ".card-zoom",
      props: (el) => ({
        opacity: 0,
        scale: 0.98,
      }),
    },
  ];

  animations.forEach(({ selector, props }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      const start = el.dataset.start || "top 80%";
      const delay = parseFloat(el.dataset.delay) || 0;
      const duration = parseFloat(el.dataset.duration) || 1.5;

      gsap.from(el, {
        ...props(el),
        scrollTrigger: {
          trigger: el,
          start: start,
          toggleActions: "play reverse play reverse",
        },
        delay: delay,
        duration: duration,
        ease: "power2.out",
      });
    });
  });
}