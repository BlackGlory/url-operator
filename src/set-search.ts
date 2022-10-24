export function setSearch(url: string | URL, search: string): URL {
  const newURL = new URL(url)

  newURL.search = search

  return newURL
}
