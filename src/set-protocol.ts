export function setProtocol(url: URL, protocol: string): URL {
  const oldURL = new URL(url)

  // WHATWG URL标准在更改协议时具有怪癖, 会阻止与[Special Scheme]协议相关的修改.
  // 这意味着协议为`http:`的URL无法更改为`foo:`协议, 协议为`foo:`的URL也无法更改为`http:`协议.
  // 为了绕过这项限制, 此处直接替换URL字符串.
  // [Special Scheme]: https://url.spec.whatwg.org/#special-scheme

  // 此外, 还存在一种URL的host为空的情况, 即`mailto:`、`javascript:`等协议,
  // 这些URL在协议后直接跟pathname而不是host.
  // 要正确处理相关URL的协议转换, 需要完成host与pathname之间的转换, 而这在URL对象上也无法实现(赋值会静默失败).

  const newURL = new URL(
    oldURL.href.replace(
      /^\S+:/
    , protocol.endsWith(':')
      ? protocol
      : `${protocol}:`
    )
  )

  return newURL
}
