export function appendPathname(url: URL, pathname: string): URL {
  const newURL = new URL(url)
  if (!newURL.pathname.endsWith('/')) newURL.pathname += '/'

  const relativePathname = pathname.replace(/^\/+/, '')
  const newPathname = new URL(relativePathname, newURL).pathname.replace(/\/+$/, '')
  newURL.pathname = newPathname

  return newURL
}
