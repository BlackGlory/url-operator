import { setSearch } from '@src/set-search'

test('setSearch', () => {
  const url = new URL('protocol://hostname')

  const result = setSearch(url, 'param=value')

  expect(result.search).toBe('?param=value')
  expect(result).not.toBe(url)
  expect(url.href).toBe('protocol://hostname')
})
