// components/AnimatedWave.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedWave = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    const wavePath = waveRef.current;

    const wave1 = "M0,160 C480,360 960,-40 1440,160 L1440,320 L0,320 Z";
    const wave2 = "M0,120 C480,-40 960,360 1440,120 L1440,320 L0,320 Z";
    const wave3 = "M0,200 C480,-80 960,400 1440,200 L1440,320 L0,320 Z";
    const color1 = "#7c3aed"; // Purple
    const color2 = "#21c064"; // Green
    const color3 = "red"; // Red

    wavePath.setAttribute("d", wave1);
    wavePath.setAttribute("fill", color1);

    const animateWave = () => {
      gsap.to(wavePath, {
        duration: 2,
        attr: { d: wave2 },
        fill: color2,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(wavePath, {
            duration: 2,
            attr: { d: wave3 },
            fill: color3,
            ease: "power1.inOut",
            onComplete: () => {
              gsap.to(wavePath, {
                duration: 2,
                attr: { d: wave1 },
                fill: color1,
                ease: "power1.inOut",
                onComplete: animateWave,
              });
            },
          });
        },
      });
    };

    animateWave();
  }, []);

  return (
    <div className="wave-container">
      <svg viewBox="0 0 1440 320" className="w-full h-32">
        <path ref={waveRef} />
      </svg>
    </div>
  );
};

export default AnimatedWave;
