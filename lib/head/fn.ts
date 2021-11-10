import { take } from '@/take/fn'

import type { Head } from '@/head/types'

/**
 * Infer the head types.
 *
 * @typeParam T - `string` or any `array`
 * @returns Head element of the `T`
 *
 * @example
 * ```ts
 * // String
 * head<''> // ''
 * head<'hello'> // 'hello'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * head<[]> // undefined
 * head<['hello', 'world']> // 'hello'
 * ```
 *
 * @beta
 */
const head = <T extends readonly unknown[] | string>(val: T): Head<T> =>
  Array.isArray(val) ? val[0] : take(1, val)

export type { Head }
export { head }
