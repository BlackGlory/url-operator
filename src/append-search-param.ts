export function appendSearchParam(
  url: string | URL
, name: string
, value: string | number
): URL {
  const newURL = new URL(url)

  const newSearchParams = new URLSearchParams(newURL.searchParams)
  newSearchParams.append(name, value.toString())
  newURL.search = newSearchParams.toString()

  return newURL
}
