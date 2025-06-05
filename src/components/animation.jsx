// src/components/Wave.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Wave = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;

    const waveShapes = [
      "M0,160 C480,280 960,40 1440,160 L1440,320 L0,320 Z", // shape 1
      "M0,120 C480,40 960,280 1440,120 L1440,320 L0,320 Z", // shape 2
      "M0,200 C480,80 960,320 1440,200 L1440,320 L0,320 Z", // shape 3
    ];

    path.setAttribute("d", waveShapes[0]);

    gsap.to(path, {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      attr: {
        d: waveShapes[1],
      },
      onRepeat: () => {
        const next = waveShapes[Math.floor(Math.random() * waveShapes.length)];
        gsap.to(path, {
          duration: 2,
          attr: { d: next },
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  return (
    <svg
      id="wave"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="wave"
      style={{ width: "100%" }}
    >
      <path ref={pathRef} fill="#7c3aed" d="" />
    </svg>
  );
};

export default Wave;
