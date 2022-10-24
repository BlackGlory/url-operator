export function setHost(url: string | URL, host: string): URL {
  const newURL = new URL(url)

  newURL.host = host

  return newURL
}
