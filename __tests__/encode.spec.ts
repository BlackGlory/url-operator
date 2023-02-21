import { encode } from '@src/encode.js'

describe('encode', () => {
  test('URL is not encoded', () => {
    const url = `protocol://你好世界`

    const result = encode(url)

    expect(result).toBe(`protocol://${encodeURI('你好世界')}`)
  })

  describe('part of URL is already encoded', () => {
    test('URL', () => {
      const url = new URL(`protocol://${encodeURI('你好世界')}`)

      const result = encode(url)

      expect(result).toBe(`protocol://${encodeURI('你好世界')}`)
    })

    test('string', () => {
      const url = `protocol://${encodeURI('你好世界')}`

      const result = encode(url)

      expect(result).toBe(`protocol://${encodeURI('你好世界')}`)
    })
  })
})
