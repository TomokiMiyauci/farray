import { take } from '@/take/fn'

import type { Head } from '@/head/types'

/**
 * Take first element of list safety
 *
 * @param T - `string` or any `array`
 * @returns first element of list
 *
 * @example
 * ```ts
 * // String
 * head('') // ''
 * head('hello') // 'h'
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
