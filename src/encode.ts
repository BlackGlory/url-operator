import { decode } from './decode.js'

// 与`encodeURI`不同, 该函数会首先尝试解码URL, 以防止二次编码.
export function encode(url: string): string {
  const decodedURL = decode(url)

  const encodedURLParts: string[] = []

  const re = /%[A-F0-9]{2}/gi
  let result: RegExpExecArray | null
  let lastMatchedEndIndex = 0
  while (result = re.exec(decodedURL), result) {
    const matched = result[0]
    const matchedStartIndex = result.index
    const matchedEndIndex = matchedStartIndex
                          + matched.length

    const rawPart = decodedURL.slice(lastMatchedEndIndex, matchedStartIndex)
    encodedURLParts.push(encodeURI(rawPart))

    encodedURLParts.push(matched)

    lastMatchedEndIndex = matchedEndIndex
  }

  if (lastMatchedEndIndex < decodedURL.length) {
    const rawPart = decodedURL.slice(lastMatchedEndIndex, decodedURL.length)
    encodedURLParts.push(encodeURI(rawPart))
  }

  return encodedURLParts.join('')
}
