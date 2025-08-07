export function addDays(n: number): string {
  const date = new Date();
  date.setDate(date.getDate() + n);
  return date.toDateString();
}
