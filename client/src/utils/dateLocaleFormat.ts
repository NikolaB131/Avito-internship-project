export default function dateLocaleFormat(seconds: number): string {
  return new Date(seconds * 1000).toLocaleString().replace(',', '');
}