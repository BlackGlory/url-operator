import { setPassword } from '@src/set-password.js'

test('setPassword', () => {
  const url = new URL('protocol://hostname')

  const result = setPassword(url, 'password')

  expect(result.password).toBe('password')
  expect(result).not.toBe(url)
  expect(url.href).toBe('protocol://hostname')
})
