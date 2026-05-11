export function appendPathname(url: URL, pathname: string): URL {
  const baseURL = new URL(url)
  if (!baseURL.pathname.endsWith('/')) baseURL.pathname += '/'

  const newURL = new URL(pathname.replace(/^\/+/, ''), baseURL)
  newURL.search = baseURL.search
  newURL.hash = baseURL.hash
  newURL.pathname = newURL.pathname.replace(/\/+$/, '')

  return newURL
}
