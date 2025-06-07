import React, { useEffect, useRef } from "react";
import "./base.css";

const LOGOS = [
  "365.svg", "711.svg", "777.svg", "bet mgm.svg", "betcity.svg", "betnation.svg",
  "bingoal.svg", "circus.svg", "comeon.svg", "fairplay casino.svg", "ggpoker.svg", "gokkerz-emblem.svg",
  "goldrun casino.svg", "hardrock casino.svg", "holland casino.svg", "hommerson.svg", "jacks casino.svg", "kansino.svg",
  "leovegas.svg", "lucky 7 casino.svg", "one casino.svg", "scori pro.svg", "tonybet.svg", "toto.svg",
  "unibet.svg", "vbet.svg", "winnit.svg", "ze bet.svg"
];

const ROWS = 5;
const LOGO_WIDTH = 480;
const CONTAINER_WIDTH = 2880;
const BASE_SPEED = 1.5;

// Create duplicated logo arrays for infinite scroll
function createInfiniteLogoArray(startIndex, count) {
  const logos = [];
  for (let i = 0; i < count * 2; i++) { // Duplicate for seamless loop
    logos.push(LOGOS[(startIndex + i) % LOGOS.length]);
  }
  return logos;
}

export default function CasinoLogoTiles() {
  const rowRefs = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const rows = rowRefs.current;
    let animationId;

    function animate() {
      rows.forEach((row, index) => {
        if (!row) return;
        
        const direction = index % 2 === 0 ? -1 : 1;
        const currentTransform = row.style.transform || 'translateX(0px)';
        const currentX = parseFloat(currentTransform.match(/translateX\(([^)]+)px\)/)?.[1] || 0);
        
        let newX = currentX + (BASE_SPEED * direction);
        
        // Reset position for infinite loop
        const resetPoint = LOGO_WIDTH * (LOGOS.length / ROWS);
        if (direction === -1 && newX <= -resetPoint) {
          newX = 0;
        } else if (direction === 1 && newX >= resetPoint) {
          newX = 0;
        }
        
        row.style.transform = `translateX(${newX}px)`;
      });
      
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const renderRow = (rowIndex) => {
    const startIndex = Math.floor((rowIndex * LOGOS.length) / ROWS);
    const logosPerRow = Math.ceil(LOGOS.length / ROWS) + 2; // Extra logos for seamless loop
    const rowLogos = createInfiniteLogoArray(startIndex, logosPerRow);

    return (
      <div
        key={rowIndex}
        className="tiles__line"
        ref={el => (rowRefs.current[rowIndex] = el)}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          height: 216,
          willChange: 'transform'
        }}
      >
        {rowLogos.map((logo, logoIndex) => (
          <div
            key={`${rowIndex}-${logoIndex}-${logo}`}
            className="tiles__line-img"
            style={{
              backgroundImage: `url(/casinologos/casilogos/${logo})`,
              width: LOGO_WIDTH,
              height: 200,
              margin: '0 10px',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%) contrast(1.2)',
              opacity: 0.85,
              flexShrink: 0
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        overflow: "hidden",
        position: "relative",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Enhanced fade effect with smoother gradients
        maskImage: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 5%, rgba(255,255,255,0.8) 12%, #fff 20%, #fff 80%, rgba(255,255,255,0.8) 88%, rgba(255,255,255,0.1) 95%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 5%, rgba(255,255,255,0.8) 12%, #fff 20%, #fff 80%, rgba(255,255,255,0.8) 88%, rgba(255,255,255,0.1) 95%, transparent 100%)"
      }}
    >
      <div
        className="tiles tiles--rotated"
        style={{
          width: 1920,
          height: 1080,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          className="tiles__wrap"
          style={{
            width: CONTAINER_WIDTH,
            height: 1080,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate3d(-50%,-50%,0) rotate(22.5deg) scale(1.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly"
          }}
        >
          {Array.from({ length: ROWS }, (_, index) => renderRow(index))}
        </div>
      </div>
    </div>
  );
}
