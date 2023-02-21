import { decode } from '@src/decode.js'

describe('decode', () => {
  describe('absolute URLs', () => {
    test('URL is not decoded', () => {
      const url = `protocol://${encodeURI('你好世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://你好世界')
    })

    test('part of URL is already decoded', () => {
      const url = `protocol://你好${encodeURI('世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://你好世界')
    })
  })

  describe('relative URLs', () => {
    test('URL is not decoded', () => {
      const url = `../${encodeURI('你好世界')}`

      const result = decode(url)

      expect(result).toBe('../你好世界')
    })

    test('part of URL is already decoded', () => {
      const url = `../你好${encodeURI('世界')}`

      const result = decode(url)

      expect(result).toBe('../你好世界')
    })
  })
})
