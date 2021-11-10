/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @example
 * ```ts
 * LastString<''> // ''
 * LastString<'a'> // 'a'
 * LastString<'abcdefghijk'> // 'k'
 * ```
 *
 * @internal
 */
type LastString<T extends string> = T extends `${infer L}${infer R}`
  ? R extends ''
    ? L
    : LastString<R>
  : T extends ''
  ? ''
  : string

/**
 * Infer the last types.
 *
 * @typeParam T - `string` or any `array`
 *
 * @example
 * ```ts
 * // String
 * Last<string> // string
 * Last<''> // ''
 * Last<'hello'> // 'o'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * Last<[] | never[] | readonly [] | readonly never[]> // undefined
 * Last<['hello', 'world']> // 'world'
 * Last<string | number[]> // string | number | undefined
 * ```
 *
 * @beta
 */
type Last<T extends string | readonly unknown[]> = T extends string
  ? LastString<T>
  : T extends readonly [...infer _, infer L]
  ? L
  : T[T['length']] | undefined

export type { Last }
