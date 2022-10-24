export function setHash(url: string | URL, hash: string): URL {
  const newURL = new URL(url)

  newURL.hash = hash

  return newURL
}
