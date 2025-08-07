export function generateRank(value: number): string {
  if (value <= 0) return `rank parameter is integer!`;
  if (value > 3) return `${value}th`;
  const arr = ['', 'st', 'nd', 'rd'];
  return `${value}${arr[value % 10]}`;
}
