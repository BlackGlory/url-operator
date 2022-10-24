export function setPort(url: string | URL, port: number): URL {
  const newURL = new URL(url)

  newURL.port = port.toString()

  return newURL
}
