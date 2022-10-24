import { setSearchParam } from '@src/set-search-param'

test('setSearchParam', () => {
  const url = new URL('protocol://hostname')

  const result1 = setSearchParam(url, 'param', 'value')
  const result2 = setSearchParam(result1, 'param', 'value')

  expect(result1.search).toBe('?param=value')
  expect(result2.search).toBe(result1.search)
  expect(result1).not.toBe(url)
  expect(result2).not.toBe(url)
  expect(url.href).toBe('protocol://hostname')
})
