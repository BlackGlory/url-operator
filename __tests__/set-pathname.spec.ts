import { setPathname } from '@src/set-pathname.js'

test('setPathname', () => {
  const url = new URL('protocol://hostname')

  const result = setPathname(url, 'test')

  expect(result).not.toBe(url)
  expect(result.pathname).toBe('/test')
  expect(url.href).toBe('protocol://hostname')
})
