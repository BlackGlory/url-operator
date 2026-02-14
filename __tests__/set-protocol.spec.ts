import { setProtocol } from '@src/set-protocol.js'

describe('setProtocol', () => {
  test('protocol ends with `:`', () => {
    const url = new URL('foo://bar')

    const result = setProtocol(url, 'http:')

    expect(result).not.toBe(url)
    expect(result.protocol).toBe('http:')
    expect(result.href).toBe('http://bar/')
    expect(url.href).toBe('foo://bar')
  })

  test('protocol does not ends with `:`', () => {
    const url = new URL('foo://bar')

    const result = setProtocol(url, 'http')

    expect(result).not.toBe(url)
    expect(result.protocol).toBe('http:')
    expect(result.href).toBe('http://bar/')
    expect(url.href).toBe('foo://bar')
  })

  describe('edge: without `//`', () => {
    test('to known protocol', () => {
      const url = new URL('foo:bar')

      const result = setProtocol(url, 'http')

      expect(result).not.toBe(url)
      expect(result.protocol).toBe('http:')
      expect(result.href).toBe('http://bar/')
      expect(url.href).toBe('foo:bar')
    })

    test('to unknown protocol', () => {
      const url = new URL('foo:bar')

      const result = setProtocol(url, 'baz')

      expect(result).not.toBe(url)
      expect(result.protocol).toBe('baz:')
      expect(result.href).toBe('baz:bar')
      expect(url.href).toBe('foo:bar')
    })
  })
})
