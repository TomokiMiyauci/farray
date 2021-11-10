/**
 * Return a slice of string or array with `n` elements taken from the end
 *
 * @param howMany - The number of elements to take
 * @param val - `String` or `Array` to query
 * @returns The sliced array
 *
 * @example
 * ```ts
 * // String
 * takeLast(3, 'hello') // 'llo'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * takeLast(3, [1, 2, 3, 4]) // [2, 3, 4]
 * ```
 *
 * @beta
 */
const takeLast = <T extends readonly unknown[] | string>(
  howMany: number,
  val: T
): T => (howMany <= 0 ? val.slice(0, -howMany) : val.slice(-howMany)) as T

export { takeLast }
