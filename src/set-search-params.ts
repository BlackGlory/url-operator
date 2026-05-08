import { isntUndefined } from '@blackglory/prelude'

export function setSearchParams(
  url: URL
, searchParams: Record<string, string | number | undefined>
): URL {
  const newURL = new URL(url)

  const newSearchParams = new URLSearchParams(newURL.searchParams)
  for (const [name, value] of Object.entries(searchParams)) {
    if (isntUndefined(value)) newSearchParams.set(name, value.toString())
  }
  newURL.search = newSearchParams.toString()

  return newURL
}
