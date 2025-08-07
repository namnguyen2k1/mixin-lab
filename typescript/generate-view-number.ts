export function generateViewNumber(value: number): string {
  const suffixes = ['', 'k', 'm', 'b', 't'];
  let suffixNum = Math.floor(`${value}`.length / 3);
  let shortValue = value / 1000 ** suffixNum;
  if (shortValue <= 1) {
    shortValue *= 1000;
    suffixNum--;
  }
  return `${shortValue}${suffixes[suffixNum]}`;
}
