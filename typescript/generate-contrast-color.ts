export function generateContrastColor(hexcolor: string, light = 'white', dark = 'black'): string {
  if (hexcolor[0] === '#') {
    hexcolor = hexcolor.substring(1);
  }
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(hex => hex + hex)
      .join('');
  }
  const r = parseInt(hexcolor.substring(0, 2), 16);
  const g = parseInt(hexcolor.substring(2, 4), 16);
  const b = parseInt(hexcolor.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? dark : light;
}
