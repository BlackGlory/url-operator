import { setUsername } from '@src/set-username.js'

test('setUsername', () => {
  const url = new URL('protocol://hostname')

  const result = setUsername(url, 'username')

  expect(result.username).toBe('username')
  expect(result).not.toBe(url)
  expect(url.href).toBe('protocol://hostname')
})
