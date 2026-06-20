# Territory

Convert a Map to a keyed object like `Object.fromEntries` ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)). Based on [`fromEntries()` ponyfill](https://github.com/feross/fromentries).

```sh
npm install @charliewilco/territory
```

```js
import fromEntries from "@charliewilco/territory";

const object = fromEntries(
	new Map([
		["one", 1],
		["two", 2],
	]),
);

// { "one": 1, "two": 2 }
```
