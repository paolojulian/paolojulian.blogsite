export function isMacOS() {
  if (!navigator) return;

  const userAgent = navigator.userAgent.toLowerCase();

  const isMacOS = /macintosh|mac os x/i.test(userAgent);
  return isMacOS;
}