export function getCurrentDate(wall = '/'): string {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  const dayName = weekDays[d.getDay()];
  const time = d.toLocaleTimeString();
  const day = `${d.getUTCDate()}${wall}${d.getUTCMonth() + 1}${wall}${d.getUTCFullYear()}`;
  return `${dayName} ${day} ${time}`;
}
