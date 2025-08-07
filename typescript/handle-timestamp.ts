export function handleTimestamp(timestamp: string, wall = '/'): string {
  const data = new Date(timestamp);
  return `${data.getDate()}${wall}${data.getMonth() + 1}${wall}${data.getFullYear()}`;
}
