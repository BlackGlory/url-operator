import { setPassword } from '@src/set-password.js'

test('setPassword', () => {
  const url = new URL('protocol://hostname')

  const result = setPassword(url, 'password')

  expect(result).not.toBe(url)
  expect(result.password).toBe('password')
  expect(url.href).toBe('protocol://hostname')
})
