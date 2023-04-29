export const fromEntriesReduced = <K extends string, U>(
	iterable: Map<K, U>
): Record<K, U> =>
	[...iterable].reduce<Record<K, U>>((obj: Record<K, U>, [key, val]) => {
		obj[key] = val;
		return obj;
	}, {} as Record<K, U>);

export default function territory<K extends string, U>(
	iterable: Map<K, U>
): Record<K, U> {
	let object = {} as Record<K, U>;

	for (let [key, val] of iterable) {
		object[key] = val;
	}

	return object;
}
