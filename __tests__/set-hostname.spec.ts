import { setHostname } from '@src/set-hostname.js'

test('setHostname', () => {
  const url = new URL('protocol://hostname:8080')

  const result = setHostname(url, 'example.com')

  expect(result).not.toBe(url)
  expect(result.hostname).toBe('example.com')
  expect(result.href).toBe('protocol://example.com:8080')
  expect(url.href).toBe('protocol://hostname:8080')
})
