// Utility function for className merging (Tailwind/React projects)
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
