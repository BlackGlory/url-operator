import { decode } from '@src/decode.js'

describe('decode', () => {
  describe('absolute URLs', () => {
    test('host', () => {
      const url = `protocol://${encodeURIComponent('你好世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://你好世界')
    })

    test('host (partial)', () => {
      const url = `protocol://你好${encodeURIComponent('世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://你好世界')
    })

    test('host (special characters)', () => {
      const url = `protocol://${encodeURIComponent('你好/世界')}`

      const result = decode(url)

      expect(result).toBe(`protocol://你好${encodeURIComponent('/')}世界`)
    })

    test('pathname', () => {
      const url = `protocol://foo/${encodeURIComponent('你好世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://foo/你好世界')
    })

    test('pathname (partial)', () => {
      const url = `protocol://foo/你好${encodeURIComponent('世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://foo/你好世界')
    })

    test('pathname (special characters)', () => {
      const url = `protocol://foo/${encodeURIComponent('你好/世界')}`

      const result = decode(url)

      expect(result).toBe(`protocol://foo/你好${encodeURIComponent('/')}世界`)
    })

    test('querystring', () => {
      const url = `protocol://foo/?${encodeURIComponent('你好')}=${encodeURIComponent('世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://foo/?你好=世界')
    })

    test('querystring (partial)', () => {
      const url = `protocol://foo/?你${encodeURIComponent('好')}=世${encodeURIComponent('界')}`

      const result = decode(url)

      expect(result).toBe('protocol://foo/?你好=世界')
    })

    test('querystring (special characters)', () => {
      const url = `protocol://foo/?你${encodeURIComponent('/')}好=${encodeURIComponent('世/界')}`

      const result = decode(url)

      expect(result).toBe(`protocol://foo/?你${encodeURIComponent('/')}好=世${encodeURIComponent('/')}界`)
    })

    test('hash', () => {
      const url = `protocol://foo/#${encodeURIComponent('你好世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://foo/#你好世界')
    })

    test('hash (partial)', () => {
      const url = `protocol://foo/#你好${encodeURIComponent('世界')}`

      const result = decode(url)

      expect(result).toBe('protocol://foo/#你好世界')
    })

    test('hash (special characters)', () => {
      const url = `protocol://foo/#${encodeURIComponent('你好/世界')}`

      const result = decode(url)

      expect(result).toBe(`protocol://foo/#你好${encodeURIComponent('/')}世界`)
    })
  })

  describe('relative URLs', () => {
    test('pathname', () => {
      const url = `../${encodeURIComponent('你好世界')}`

      const result = decode(url)

      expect(result).toBe('../你好世界')
    })

    test('pathname (partial)', () => {
      const url = `../你好${encodeURIComponent('世界')}`

      const result = decode(url)

      expect(result).toBe('../你好世界')
    })

    test('pathname (special characters)', () => {
      const url = `../${encodeURIComponent('你好/世界')}`

      const result = decode(url)

      expect(result).toBe(`../你好${encodeURIComponent('/')}世界`)
    })

    test('querystring', () => {
      const url = `../?${encodeURIComponent('你好')}=${encodeURIComponent('世界')}`

      const result = decode(url)

      expect(result).toBe('../?你好=世界')
    })

    test('querystring (partial)', () => {
      const url = `../?你${encodeURIComponent('好')}=世${encodeURIComponent('界')}`

      const result = decode(url)

      expect(result).toBe('../?你好=世界')
    })

    test('querystring (special characters)', () => {
      const url = `../?你${encodeURIComponent('/')}好=${encodeURIComponent('世/界')}`

      const result = decode(url)

      expect(result).toBe(`../?你${encodeURIComponent('/')}好=世${encodeURIComponent('/')}界`)
    })

    test('hash', () => {
      const url = `../#${encodeURIComponent('你好世界')}`

      const result = decode(url)

      expect(result).toBe('../#你好世界')
    })

    test('hash (partial)', () => {
      const url = `../#你好${encodeURIComponent('世界')}`

      const result = decode(url)

      expect(result).toBe('../#你好世界')
    })

    test('hash (special characters)', () => {
      const url = `../#${encodeURIComponent('你好/世界')}`

      const result = decode(url)

      expect(result).toBe(`../#你好${encodeURIComponent('/')}世界`)
    })
  })
})
