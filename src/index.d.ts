export declare const fromEntriesReduced: <K extends string, U>(
	iterable: Map<K, U>,
) => Record<K, U>;

export default function territory<K extends string, U>(
	iterable: Map<K, U>,
): Record<K, U>;
