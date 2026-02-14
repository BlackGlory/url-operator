export function setHostname(url: URL, hostname: string): URL {
  const newURL = new URL(url)

  newURL.hostname = hostname

  return newURL
}
