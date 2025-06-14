import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger);

// Animaciones al hacer scroll
export function initScrollAnimations() {
  gsap.utils.toArray(".fade-in").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power2.out",
    });
  });

  // Zoom in
  gsap.utils.toArray(".zoom-in").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 65%",
        toggleActions: "play reverse play reverse",

      },
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  });
}
