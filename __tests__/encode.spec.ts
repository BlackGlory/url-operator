import { encode } from '@src/encode.js'

describe('encode', () => {
  describe('absolute URLs', () => {
    test('URL is not encoded', () => {
      const url = `protocol://你好世界`

      const result = encode(url)

      expect(result).toBe(`protocol://${encodeURI('你好世界')}`)
    })

    test('part of URL is already encoded', () => {
      const url = `protocol://你好${encodeURI('世界')}`

      const result = encode(url)

      expect(result).toBe(`protocol://${encodeURI('你好世界')}`)
    })
  })

  describe('relative URLs', () => {
    test('URL is not encoded', () => {
      const url = `../你好世界`

      const result = encode(url)

      expect(result).toBe(`../${encodeURI('你好世界')}`)
    })

    test('part of URL is already encoded', () => {
      const url = `../你好${encodeURI('世界')}`

      const result = encode(url)

      expect(result).toBe(`../${encodeURI('你好世界')}`)
    })
  })
})
