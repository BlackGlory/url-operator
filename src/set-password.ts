export function setPassword(url: string | URL, password: string): URL {
  const newURL = new URL(url)

  newURL.password = password

  return newURL
}
