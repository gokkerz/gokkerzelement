import React from "react";
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
const VISIBLE_LOGOS = 5;  // Number of logos visible at once
const TOTAL_LOGOS = 9;    // Total logos in a row (5 visible + 4 for transition)
const CONTAINER_WIDTH = LOGO_WIDTH * TOTAL_LOGOS;

// Create duplicated logo arrays for infinite scroll
function createInfiniteLogoArray(startIndex, count) {
  const logos = [];
  // Create exactly TOTAL_LOGOS logos per row
  for (let i = 0; i < TOTAL_LOGOS; i++) {
    logos.push(LOGOS[(startIndex + i) % LOGOS.length]);
  }
  return logos;
}

export default function CasinoLogoTiles() {
  const renderRow = (rowIndex) => {
    const startIndex = Math.floor((rowIndex * LOGOS.length) / ROWS);
    const logosPerRow = Math.ceil(LOGOS.length / ROWS);
    const rowLogos = createInfiniteLogoArray(startIndex, logosPerRow);
    
    // Alternate animation direction for each row
    const animationClass = rowIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right';

    return (
      <div
        key={rowIndex}
        className={`tiles__line ${animationClass}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: CONTAINER_WIDTH,
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
        // Smoother fade effect with more gradual transitions
        maskImage: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.05) 3%, rgba(255,255,255,0.1) 6%, rgba(255,255,255,0.25) 9%, rgba(255,255,255,0.4) 12%, rgba(255,255,255,0.6) 15%, rgba(255,255,255,0.8) 18%, #fff 22%, #fff 78%, rgba(255,255,255,0.8) 82%, rgba(255,255,255,0.6) 85%, rgba(255,255,255,0.4) 88%, rgba(255,255,255,0.25) 91%, rgba(255,255,255,0.1) 94%, rgba(255,255,255,0.05) 97%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.05) 3%, rgba(255,255,255,0.1) 6%, rgba(255,255,255,0.25) 9%, rgba(255,255,255,0.4) 12%, rgba(255,255,255,0.6) 15%, rgba(255,255,255,0.8) 18%, #fff 22%, #fff 78%, rgba(255,255,255,0.8) 82%, rgba(255,255,255,0.6) 85%, rgba(255,255,255,0.4) 88%, rgba(255,255,255,0.25) 91%, rgba(255,255,255,0.1) 94%, rgba(255,255,255,0.05) 97%, transparent 100%)"
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
