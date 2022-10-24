import { appendSearchParam } from '@src/append-search-param'

test('appendSearchParam', () => {
  const url = new URL('protocol://hostname')

  const result1 = appendSearchParam(url, 'param', 'value')
  const result2 = appendSearchParam(result1, 'param', 'value')

  expect(result1.search).toBe('?param=value')
  expect(result2.search).toBe('?param=value&param=value')
  expect(result1).not.toBe(url)
  expect(result2).not.toBe(url)
  expect(url.href).toBe('protocol://hostname')
})
