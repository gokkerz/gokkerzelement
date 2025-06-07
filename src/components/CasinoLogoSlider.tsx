import React from "react";

/**
 * CasinoLogoSlider - herbruikbaar component voor de bewegende casino logo's.
 * Gebaseerd op de originele implementatie uit Startpagina.tsx.
 * Gebruik: <CasinoLogoSlider />
 */
const CasinoLogoSlider: React.FC = () => {
  // Define logo arrays once
  const row1 = [
    "toto",
    "holland casino",
    "betcity",
    "kansino",
    "circus",
    "jacks casino",
    "bingoal",
    "unibet",
    "bet mgm",
  ];
  const row2 = [
    "ggpoker",
    "leovegas",
    "lucky 7 casino",
    "one casino",
    "777",
    "711",
    "365",
    "fairplay casino",
    "comeon",
  ];
  const row3 = [
    "vbet",
    "winnit",
    "ze bet",
    "tonybet",
    "scori pro",
    "goldrun casino",
    "hardrock casino",
    "hommerson",
    "betnation",
  ];

  // Helper to render a seamless row
  const renderRow = (logos: string[], animationClass: string) => (
    <div className="overflow-hidden">
      <div
        className={`inline-flex whitespace-nowrap ${animationClass} gap-8`}
        style={{ minWidth: "min-content" }}
      >
        {/* Original set */}
        {logos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="group flex-none w-28 aspect-square transform transition-all duration-300 hover:-translate-y-0.5"
          >
            <img
              src={`/casinologos/casilogos/${logo}.svg`}
              alt={logo}
              className="h-full w-full rounded-2xl bg-white/[0.02] object-contain p-2.5 shadow-[0_4px_12px_rgb(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)]"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`${logo}-dup-${index}`}
            className="group flex-none w-28 aspect-square transform transition-all duration-300 hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <img
              src={`/casinologos/casilogos/${logo}.svg`}
              alt=""
              className="h-full w-full rounded-2xl bg-white/[0.02] object-contain p-2.5 shadow-[0_4px_12px_rgb(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="relative overflow-hidden px-8 py-6"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 8%, rgba(255,255,255,0.8) 15%, #fff 25%, #fff 75%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0.1) 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 8%, rgba(255,255,255,0.8) 15%, #fff 25%, #fff 75%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0.1) 92%, transparent 100%)",
      }}
    >
      <div className="flex flex-col gap-6">
        {/* Top Row - Moving Right */}
        {renderRow(row1, "animate-scroll-right")}
        {/* Middle Row - Moving Left */}
        {renderRow(row2, "animate-scroll-left")}
        {/* Bottom Row - Moving Right */}
        {renderRow(row3, "animate-scroll-right")}
      </div>
    </div>
  );
};

export default CasinoLogoSlider;
