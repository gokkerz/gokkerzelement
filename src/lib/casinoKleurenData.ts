export const casinoBrandColors: { [key: string]: string } = {
  '365': '#0E5241',
  '711': '#FF2323',
  '777': '#E63535',
  'Bet MGM': '#B19661',
  'BetCity': '#06F4FF',
  'BetNation': '#FF6602',
  'Bingoal': '#DF2025',
  'Circus Casino': '#DF2025',
  'ComeOn': '#39F56A',
  'Fair Play': '#C5A24A',
  'GGPoker': '#DF2025',
  'Goldrun Casino': '#F18A3E',
  'Hard Rock Casino': '#9183C8',
  'Holland Casino': '#00193F',
  'Hommerson': '#35005E',
  "Jack's Casino": '#E01A22',  // met dubbele quotes
  'Kansino': '#112CBA',
  'LeoVegas': '#F18A3E',
  'Lucky 7 Casino': '#F9B234',
  'One Casino': '#39F56A',
  'Scori Pro': '#39F56A',
  'TonyBet': '#FF4A00',
  'TOTO Casino': '#008C35',
  'Unibet': '#00853E',
  'VBet': '#EB008B',
  'Winnit': '#FF6393',
  'ZeBet': '#EE1C25'
};

// Helper functions voor kleurmanipulatie
export const getLightBrandColor = (color: string, opacity: number = 0.1) => {
  return color + Math.round(opacity * 255).toString(16).padStart(2, '0');
};

export const getGlassmorphismStyle = (color: string) => {
  return {
    background: `linear-gradient(135deg, ${getLightBrandColor(color, 0.15)}, ${getLightBrandColor(color, 0.05)})`,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: `0 4px 30px ${getLightBrandColor(color, 0.1)}`,
    border: `1px solid ${getLightBrandColor(color, 0.2)}`
  };
};