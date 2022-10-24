export function setSearchParam(url: string | URL, name: string, value: string | number): URL {
  const newURL = new URL(url)

  const newSearchParams = new URLSearchParams(newURL.searchParams)
  newSearchParams.set(name, value.toString())
  newURL.search = newSearchParams.toString()

  return newURL
}
