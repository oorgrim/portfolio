import { useEffect } from "react";
import { gsap } from "gsap";

export default function Effects() {
  useEffect(() => {
    setInterval(() => {
      gsap.to(".terminal-container", { opacity: 0.8, duration: 0.1 });
      gsap.to(".terminal-container", { opacity: 1, duration: 0.1, delay: 0.1 });
    }, 3000);
  }, []);

  return null;
}
