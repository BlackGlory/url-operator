import { setHost } from '@src/set-host.js'

describe('setHost', () => {
  test('new host without port', () => {
    const url = new URL('protocol://hostname:8080')

    const result = setHost(url, 'example.com')

    expect(result).not.toBe(url)
    expect(result.host).toBe('example.com')
    expect(result.href).toBe('protocol://example.com')
    expect(url.href).toBe('protocol://hostname:8080')
  })

  test('new host with port', () => {
    const url = new URL('protocol://hostname:8080')

    const result = setHost(url, 'example.com:80')

    expect(result).not.toBe(url)
    expect(result.host).toBe('example.com:80')
    expect(result.href).toBe('protocol://example.com:80')
    expect(url.href).toBe('protocol://hostname:8080')
  })
})
