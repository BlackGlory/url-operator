import { setPort } from '@src/set-port.js'

test('setPort', () => {
  const url = new URL('protocol://hostname')

  const result = setPort(url, 8080)

  expect(result).not.toBe(url)
  expect(result.port).toBe('8080')
  expect(url.href).toBe('protocol://hostname')
})
