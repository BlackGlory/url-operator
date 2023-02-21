export function decode(url: string | URL): string {
  const newURL = new URL(url)

  return decodeURI(newURL.href)
}
