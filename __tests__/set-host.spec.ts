import { setHost } from '@src/set-host'

test('setHost', () => {
  const url = new URL('protocol://hostname')

  const result = setHost(url, 'example.com')

  expect(result.host).toBe('example.com')
  expect(result).not.toBe(url)
  expect(url.href).toBe('protocol://hostname')
})
