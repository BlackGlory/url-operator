// 该函数仅仅是`decodeURI`的别名, 因为`decodeURI`通过了所有测试用例.
export function decode(url: string): string {
  return decodeURI(url)
}
