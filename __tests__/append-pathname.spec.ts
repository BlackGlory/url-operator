import { appendPathname } from '@src/append-pathname'

describe('appendPathname', () => {
  describe('pathname', () => {
    test('pathname starts with `/`', () => {
      const url = new URL('protocol://hostname/pathname/')

      const result = appendPathname(url, '/test')

      expect(result.pathname).toBe('/pathname/test')
      expect(result).not.toBe(url)
      expect(url.href).toBe('protocol://hostname/pathname/')
    })

    test('pathname does not start with `/`', () => {
      const url = new URL('protocol://hostname/pathname/')

      const result = appendPathname(url, 'test')

      expect(result.pathname).toBe('/pathname/test')
      expect(result).not.toBe(url)
      expect(url.href).toBe('protocol://hostname/pathname/')
    })
  })

  describe('url.pathname', () => {
    test('url.pathname does not end with `/`', () => {
      const url = new URL('protocol://hostname/pathname')

      const result = appendPathname(url, 'test')

      expect(result.pathname).toBe('/pathname/test')
      expect(result).not.toBe(url)
      expect(url.href).toBe('protocol://hostname/pathname')
    })

    test('url.pathname ends with `/`', () => {
      const url = new URL('protocol://hostname/pathname/')

      const result = appendPathname(url, 'test')

      expect(result.pathname).toBe('/pathname/test')
      expect(result).not.toBe(url)
      expect(url.href).toBe('protocol://hostname/pathname/')
    })
  })

  test('url.search exists', () => {
    const url = new URL('protocol://hostname/pathname/?name=value')

    const result = appendPathname(url, 'test')

    expect(result.pathname).toBe('/pathname/test')
    expect(result.search).toBe('?name=value')
    expect(result).not.toBe(url)
    expect(url.href).toBe('protocol://hostname/pathname/?name=value')
  })

  test('url.hash exists', () => {
    const url = new URL('protocol://hostname/pathname/#hash')

    const result = appendPathname(url, 'test')

    expect(result.pathname).toBe('/pathname/test')
    expect(result.hash).toBe('#hash')
    expect(result).not.toBe(url)
    expect(url.href).toBe('protocol://hostname/pathname/#hash')
  })
})
