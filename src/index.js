export const fromEntriesReduced = (iterable) =>
	[...iterable].reduce((object, [key, val]) => {
		object[key] = val;
		return object;
	}, {});

export default function territory(iterable) {
	const object = {};

	for (const [key, val] of iterable) {
		object[key] = val;
	}

	return object;
}
