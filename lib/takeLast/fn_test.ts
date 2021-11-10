// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { takeLast } from '@/takeLast/fn'

const table: [number, unknown[] | string, unknown[] | string][] = [
  [0, [], []],
  [Infinity, [], []],
  [Infinity, [], []],
  [Infinity, [1], [1]],
  [Infinity, [1, 2, 3, 4], [1, 2, 3, 4]],
  [3, [1, 2, 3, 4], [2, 3, 4]],
  [2, [1, 2, 3, 4], [3, 4]],
  [100, [1, 2, 3, 4], [1, 2, 3, 4]],
  [0, [1, 2, 3, 4], []],
  [-0, [1, 2, 3, 4], []],
  [-1, [1, 2, 3, 4], [1]],
  [-2, [1, 2, 3, 4], [1, 2]],
  [-3, [1, 2, 3, 4], [1, 2, 3]],
  [-4, [1, 2, 3, 4], [1, 2, 3, 4]],
  [-Infinity, [1, 2, 3, 4], [1, 2, 3, 4]],
  [0, 'hello', ''],
  [-0, 'hello', ''],
  [1, 'hello', 'o'],
  [3, 'hello', 'llo'],
  [Infinity, 'hello', 'hello'],
  [100, 'hello', 'hello'],
  [-1, 'hello', 'h'],
  [-4, 'hello', 'hell'],
  [-5, 'hello', 'hello'],
  [-Infinity, 'hello', 'hello']
]
it.each(table)('takeLate(%d, %s) => %s', (howMany, val, expected) =>
  expect(takeLast(howMany, val)).toEqual(expected)
)
