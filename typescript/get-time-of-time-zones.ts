export function getTimeOfTimeZones(timeZone = 'Asia/Ho_Chi_Minh'): string {
  const date = new Date();
  return date.toLocaleTimeString('en-US', { timeZone });
}
