export function generateRandomNumber(min: number, max: number): number {
  if (max <= min) throw new Error('min < max');
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
