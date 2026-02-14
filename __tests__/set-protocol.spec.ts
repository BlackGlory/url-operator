import { setProtocol } from '@src/set-protocol.js'

describe('setProtocol', () => {
  test('protocol ends with `:`', () => {
    const url = new URL('protocol://hostname')

    const result = setProtocol(url, 'http:')

    expect(result).not.toBe(url)
    expect(result.protocol).toBe('http:')
    expect(result.href).toBe('http://hostname/')
    expect(url.href).toBe('protocol://hostname')
  })

  test('protocol does not ends with `:`', () => {
    const url = new URL('protocol://hostname')

    const result = setProtocol(url, 'http')

    expect(result).not.toBe(url)
    expect(result.protocol).toBe('http:')
    expect(result.href).toBe('http://hostname/')
    expect(url.href).toBe('protocol://hostname')
  })
})
