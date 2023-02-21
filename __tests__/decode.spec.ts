import { decode } from '@src/decode.js'

describe('decode', () => {
  test('URL',  () => {
    const url = new URL(`protocol://${encodeURI('你好世界')}`)

    const result = decode(url)

    expect(result).toBe('protocol://你好世界')
  })

  test('string', () => {
    const url = `protocol://${encodeURI('你好世界')}`

    const result = decode(url)

    expect(result).toBe('protocol://你好世界')
  })
})
