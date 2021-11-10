/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Infer the head types.
 *
 * @typeParam T - `string` or any `array`
 * @returns Head element of the `T`
 *
 * @example
 * ```ts
 * // String
 * Head<string> // string
 * Head<''> // ''
 * Head<'hello'> // 'h'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * Head<[] | never[] | readonly [] | readonly never[]> // undefined
 * Head<['hello', 'world']> // 'hello'
 * Head<string | number[]> // string | number | undefined
 * ```
 *
 * @beta
 */
type Head<T extends readonly unknown[] | string> = T extends string
  ? T extends `${infer F}${string}`
    ? F
    : T extends ''
    ? ''
    : string
  : T extends readonly [infer U, ...infer _]
  ? U
  : T[0] | undefined

export type { Head }
