export function getCurrentTime(): string {
  const date = new Date();
  let hh: string | number = date.getHours();
  let mm: string | number = date.getMinutes();
  let ss: string | number = date.getSeconds();
  let session = 'AM';
  if (hh === 0) hh = 12;
  if (hh > 12) {
    hh -= 12;
    session = 'PM';
  }
  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;
  return `${hh}:${mm}:${ss} ${session}`;
}
