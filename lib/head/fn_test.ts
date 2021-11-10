import { head } from '@/head'

describe('head', () => {
  const table: [string | unknown[], string | undefined | unknown][] = [
    ['', ''],
    ['a', 'a'],
    [' ab', ' '],
    ['abcd', 'a'],
    ['abcde ', 'a'],
    ['abcd_', 'a'],
    [[], undefined],
    [[''], ''],
    [['hello', 'world'], 'hello'],
    [['hello', 'new', 'world'], 'hello'],
    [
      [['hello', 'new', 'world'], 'test'],
      ['hello', 'new', 'world']
    ],
    [
      [
        ['hello', 'new', 'world'],
        ['hello2', 'world']
      ],
      ['hello', 'new', 'world']
    ],
    [[0], 0],
    [[0, 3, 6, 9], 0],
    [[{}], {}]
  ]
  it.each(table)('head(%s) => %s', (value, expected) => {
    expect(head(value)).toEqual(expected)
  })
})
