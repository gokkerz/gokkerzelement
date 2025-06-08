import React from "react";

// Casino logo styles
export const casinoLogoStyles = {
  logo: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]"
}

/**
 * CasinoLogoSlider - he            <img
              src={`/casinologos/casilogos/${logo}.svg`}
              alt={`${logo} logo`}
              className="h-full w-full object-contain p-2.5 transition-transform duration-300 group-hover:scale-105 rounded-[20%] shadow-[inset_14px_24px_25px_-21px_rgba(209,217,230,0.34),inset_14px_28px_29px_-21px_rgba(209,217,230,0.4),inset_14px_35px_36px_-21px_rgba(209,217,230,0.48),inset_14px_54px_52px_-21px_rgba(209,217,230,0.67),inset_-36px_-63px_56px_-21px_rgba(255,255,255,0.75),inset_-36px_-36.8341px_33.671899999999994px_-21px_rgba(255,255,255,0.54),inset_-36px_-31.3638px_26.025999999999996px_-21px_rgba(255,255,255,0.45),inset_-36px_-28.4185px_25px_-21px_rgba(255,255,255,0.38)]"
              loading="lazy"
            />baar component voor de bewegende casino logo's.
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
    <div>
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
            {/* Casino logo styles */}
            <img
              src={`/casinologos/casilogos/${logo}.svg`}
              alt={logo}
              className={`h-full w-full object-contain transition-all duration-300 group-hover:scale-105 ${casinoLogoStyles.logo}`}
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
            {/* Casino logo styles */}
            <img
              src={`/casinologos/casilogos/${logo}.svg`}
              alt=""
              className={`h-full w-full object-contain transition-all duration-300 group-hover:scale-105 ${casinoLogoStyles.logo}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="relative overflow-visible px-8 py-6"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 8%, rgba(255,255,255,0.8) 15%, #fff 25%, #fff 75%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0.1) 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 8%, rgba(255,255,255,0.8) 15%, #fff 25%, #fff 75%, rgba(255,255,255,0.8) 85%, rgba(255,255,255,0.1) 92%, transparent 100%)",
      }}
    >
      <div className="flex flex-col" style={{ rowGap: "2.0rem" }}>
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
