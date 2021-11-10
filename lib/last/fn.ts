import { takeLast } from '@/takeLast/fn'

import type { Last } from '@/last/types'

/**
 * Take last element of list safety
 *
 * @param val - Any list
 * @returns The last element of the `val`
 *
 * @remarks
 * The maximum number of characters for the type system to work properly is 24.
 *
 * @example
 * ```ts
 * // String
 * last('') // ''
 * last('hello') // 'o'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * last('hello', 'new', 'world') // 'world'
 * last([]) // undefined
 * last(['one', 2, 3, 4]) // 4
 * ```
 *
 * @beta
 */
const last = <T extends string | readonly unknown[]>(val: T): Last<T> =>
  Array.isArray(val) ? takeLast(1, val)[0] : takeLast(1, val)

export { last }
