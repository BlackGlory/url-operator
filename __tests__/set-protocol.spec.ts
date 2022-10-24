import { setProtocol } from '@src/set-protocol'

describe('setProtocol', () => {
  test('protocol ends with `:`', () => {
    const url = new URL('protocol://hostname')

    const result = setProtocol(url, 'http:')

    expect(result.protocol).toBe('http:')
    expect(result).not.toBe(url)
    expect(url.href).toBe('protocol://hostname')
  })

  test('protocol does not ends with `:`', () => {
    const url = new URL('protocol://hostname')

    const result = setProtocol(url, 'http')

    expect(result.protocol).toBe('http:')
    expect(result).not.toBe(url)
    expect(url.href).toBe('protocol://hostname')
  })
})
