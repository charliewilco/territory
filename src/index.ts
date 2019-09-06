type KeyIndex = string | number;

interface IObjectMap<T> {
  [K: string]: T;
}

export const territoryReduced = <K extends string, U>(
  iterable: Map<K, U>,
): IObjectMap<U> =>
  [...iterable].reduce((obj: IObjectMap<U>, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});

export default function territory<K extends string, U>(
  iterable: Map<K, U>,
): IObjectMap<U> {
  const object: IObjectMap<U> = {};

  for (let [key, val] of iterable) {
    object[key] = val;
  }

  return object;

  return [...iterable].reduce((obj: IObjectMap<U>, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
}
