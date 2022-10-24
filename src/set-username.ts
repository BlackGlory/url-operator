export function setUsername(url: string | URL, username: string): URL {
  const newURL = new URL(url)

  newURL.username = username

  return newURL
}
