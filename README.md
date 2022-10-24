# url-operator
## Install
```sh
npm install --save url-operator
# or
yarn add url-operator
```

## API
### setProtocol
```ts
function setProtocol(url: string | URL, protocol: string): URL
```

### setUsername
```ts
function setUsername(url: string | URL, username: string): URL
```

### setPassword
```ts
function setPassword(url: string | URL, password: string): URL
```

### setHost
```ts
function setHost(url: string | URL, host: string): URL
```

### setPort
```ts
function setPort(url: string | URL, port: number): URL
```

### setPathname
```ts
function setPathname(url: string | URL, pathname: string): URL
```

### appendPathname
```ts
function appendPathname(url: string | URL, pathname: string): URL
```

### setSearch
```ts
function setSearch(url: string | URL, search: string): URL
```

### setSearchParam
```ts
function setSearchParam(url: string | URL, name: string, value: string | number): URL
```

### setSearchParams
```ts
function setSearchParams(
  url: string | URL
, searchParams: Record<string, string | number>
): URL
```

### appendSearchParam
```ts
function appendSearchParam(
  url: string | URL
, name: string
, value: string | number
): URL
```

### setHash
```ts
function setHash(url: string | URL, hash: string): URL
```
