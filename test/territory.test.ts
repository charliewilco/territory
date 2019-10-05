import fromEntries from '../src';

describe('fromEntries', () => {
  it('basic', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

    const o = fromEntries(map);

    expect(o.b).toBe(2);
  });
});
