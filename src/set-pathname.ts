export function setPathname(url: string | URL, pathname: string): URL {
  const newURL = new URL(url)

  newURL.pathname = pathname

  return newURL
}
