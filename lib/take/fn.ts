/**
 * Return a slice of string or array with `n` elements taken from the beginning.
 *
 * @param howMany - The number of elements to take
 * @param val - `String` or `Array` to query
 * @returns The sliced list
 *
 * @example
 * ```ts
 * // String
 * take(3, 'hello') // 'hel'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * take(3, [1, 2, 3, 4]) // [1, 2, 3]
 * ```
 *
 * @beta
 */
const take = <T extends readonly unknown[] | string>(
  howMany: number,
  val: T
): T => (howMany < 0 ? val.slice(howMany) : val.slice(0, howMany)) as T

export { take }
