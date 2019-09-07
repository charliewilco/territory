# Territory

Convert a Map to a keyed object like `Object.fromEntries` ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)). Based on [`fromEntries()` ponyfill](https://github.com/feross/fromentries).

```sh
yarn add @charliewilco/territory
```

```ts
import fromEntries from "@charliewilco/territory";

const object = territory(new Map([["one", 1], ["two", 2]]))

// { "one": 1, "two": 2 }
```

