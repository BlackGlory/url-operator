import { setSearchParams } from '@src/set-search-params.js'

test('searchParams', () => {
  const url = new URL('protocol://hostname')

  const result = setSearchParams(url, { param: 'value' })

  expect(result.search).toBe('?param=value')
  expect(result).not.toBe(url)
  expect(url.href).toBe('protocol://hostname')
})
