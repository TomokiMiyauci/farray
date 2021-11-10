// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

import { take } from '@/take/fn'

describe('take', () => {
  const table: [number, unknown[] | string, unknown[] | string][] = [
    [0, [], []],
    [Infinity, [], []],
    [Infinity, [], []],
    [Infinity, [1], [1]],
    [Infinity, [1, 2, 3, 4], [1, 2, 3, 4]],
    [3, [1, 2, 3, 4], [1, 2, 3]],
    [2, [1, 2, 3, 4], [1, 2]],
    [100, [1, 2, 3, 4], [1, 2, 3, 4]],
    [0, [1, 2, 3, 4], []],
    [-0, [1, 2, 3, 4], []],
    [-1, [1, 2, 3, 4], [4]],
    [-2, [1, 2, 3, 4], [3, 4]],
    [-3, [1, 2, 3, 4], [2, 3, 4]],
    [-4, [1, 2, 3, 4], [1, 2, 3, 4]],
    [-Infinity, [1, 2, 3, 4], [1, 2, 3, 4]],
    [0, 'hello', ''],
    [-0, 'hello', ''],
    [1, 'hello', 'h'],
    [3, 'hello', 'hel'],
    [Infinity, 'hello', 'hello'],
    [100, 'hello', 'hello'],
    [-1, 'hello', 'o'],
    [-4, 'hello', 'ello'],
    [-5, 'hello', 'hello'],
    [-Infinity, 'hello', 'hello']
  ]
  it.each(table)('take(%d, %s) => %s', (howMany, val, expected) => {
    expect(take(howMany, val)).toEqual(expected)
  })

  // assertEqual<never[]>(take(0, []))
  // assertEqual<[]>(take(0, [] as []))
  // assertEqual<readonly []>(take(0, [] as const))
  // assertEqual<''>(take(0, ''))
  // assertEqual<''>(take(0, '' as const))
})
