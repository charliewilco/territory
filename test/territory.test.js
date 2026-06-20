import assert from "node:assert/strict";
import test from "node:test";

import fromEntries, { fromEntriesReduced } from "@charliewilco/territory";

test("fromEntries converts a map to an object", () => {
	const map = new Map([
		["a", 1],
		["b", 2],
		["c", 3],
	]);
	const object = fromEntries(map);

	assert.equal(object.a, 1);
	assert.equal(object.b, 2);
	assert.equal(object.c, 3);
});

test("fromEntriesReduced converts a map to an object", () => {
	const map = new Map([
		["a", 1],
		["b", 2],
		["c", 3],
	]);
	const object = fromEntriesReduced(map);

	assert.equal(object.a, 1);
	assert.equal(object.b, 2);
	assert.equal(object.c, 3);
});
