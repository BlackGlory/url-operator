import { setSearchParams } from '@src/set-search-params.js'

test('searchParams', () => {
  const url = new URL('protocol://hostname')

  const result = setSearchParams(url, {
    foo: 'foo-value'
  , bar: 'bar-value'
  , baz: undefined
  })

  expect(result).not.toBe(url)
  expect(result.search).toBe('?foo=foo-value&bar=bar-value')
  expect(url.href).toBe('protocol://hostname')
})
