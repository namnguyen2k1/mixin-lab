export function varCSS(name: string, value: string | null): string {
  if (name[0] !== '-') name = '--' + name;
  if (value) document.documentElement.style.setProperty(name, value);
  return getComputedStyle(document.documentElement).getPropertyValue(name);
}
