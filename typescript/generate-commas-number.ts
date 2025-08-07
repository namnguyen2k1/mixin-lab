export function generateCommasNumber(number: number, separator = ','): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
