export function encode(url: string | URL): string {
  const newURL = new URL(url)

  return newURL.href
}
