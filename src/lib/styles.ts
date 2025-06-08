// Common styling constants and utility classes for Gokkerzelement

// Container styles
export const containerStyles = {
  default: "container mx-auto px-4",
  narrow: "container mx-auto px-4 max-w-5xl",
  wide: "container mx-auto px-4 max-w-7xl",
}

// Section styles
export const sectionStyles = {
  default: "py-12 sm:py-16",
  compact: "py-8 sm:py-12",
  spacious: "py-16 sm:py-24",
}

// Card styles
export const cardStyles = {
  default: "bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300",
  outlined: "border border-gray-100 rounded-xl hover:border-gray-200 transition-colors duration-300",
  glass: "bg-white/50 backdrop-blur-sm rounded-xl border border-white/20",
}

// Text styles
export const textStyles = {
  h1: "text-4xl sm:text-5xl font-bold tracking-tight",
  h2: "text-3xl sm:text-4xl font-bold",
  h3: "text-2xl sm:text-3xl font-bold",
  h4: "text-xl sm:text-2xl font-bold",
  paragraph: "text-gray-600 leading-relaxed",
}

// Button styles (aanvullend op je bestaande Button component)
export const buttonStyles = {
  primary: "bg-gokkerz-green hover:bg-gokkerz-green/90 text-white",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
  outline: "border-2 border-gokkerz-green text-gokkerz-green hover:bg-gokkerz-green/10",
  ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
}

// Common gradients
export const gradientStyles = {
  primary: "bg-gradient-to-br from-gokkerz-green to-gokkerz-green/80",
  subtle: "bg-gradient-to-br from-gray-50 to-white",
  glass: "bg-white/50 backdrop-blur-sm",
}

// Layout styles
export const layoutStyles = {
  section: "relative overflow-hidden",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  flexBetween: "flex items-center justify-between",
  flexCenter: "flex items-center justify-center",
}

// Animation styles
export const animationStyles = {
  fadeIn: "opacity-0 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:forwards]",
  slideUp: "translate-y-4 opacity-0 animate-slide-up [animation-delay:0.2s] [animation-fill-mode:forwards]",
  scaleUp: "scale-95 opacity-0 animate-scale-up [animation-delay:0.2s] [animation-fill-mode:forwards]",
}

// Common spacing
export const spacing = {
  section: "space-y-12",
  content: "space-y-6",
  stack: "space-y-4",
  inline: "space-x-4",
}

// Common border styles
export const borderStyles = {
  default: "border border-gray-100",
  subtle: "border border-gray-50",
  accent: "border-2 border-gokkerz-green",
}

// Common shadow styles
export const shadowStyles = {
  sm: "shadow-[0_4px_12px_rgb(0,0,0,0.03)]",
  md: "shadow-[0_8px_16px_rgb(0,0,0,0.06)]",
  lg: "shadow-[0_12px_24px_rgb(0,0,0,0.09)]",
}

// Casino logo styles
export const casinoLogoStyles = {
  logo: "rounded-[10%] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.27),inset_0px_10px_10px_-5px_rgba(0,0,0,0.04),inset_-17px_18px_45px_0px_rgba(19,18,18,0.13),inset_34px_-29px_53px_-10px_rgba(190,190,190,0.17)]"
}