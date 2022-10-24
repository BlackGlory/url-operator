import { setHash } from '@src/set-hash'

describe('setHash', () => {
  test('hash starts with `#`', () => {
    const url = new URL('protocol://hostname')

    const result = setHash(url, '#hash')

    expect(result.hash).toBe('#hash')
    expect(result).not.toBe(url)
    expect(url.href).toBe('protocol://hostname')
  })

  test('hash does not start with `#`', () => {
    const url = new URL('protocol://hostname')

    const result = setHash(url, 'hash')

    expect(result.hash).toBe('#hash')
    expect(result).not.toBe(url)
    expect(url.href).toBe('protocol://hostname')
  })
})
