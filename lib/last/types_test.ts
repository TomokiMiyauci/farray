import { TypeEqual } from 'ts-expect'
import { expectType } from 'tsd'

import { last } from '@/last/fn'

import type { Last } from '@/last/types'

expectType<undefined>(last([]))
expectType<undefined>(last([] as const))
expectType<undefined>(last([] as []))
expectType<string | undefined>(last(['']))
expectType<''>(last([''] as const))
expectType<''>(last([''] as ['']))
expectType<string | number | undefined>(last(['1', 2]))
expectType<2>(last(['1', 2] as const))
expectType<[]>(last([100, 200, 'hello', []] as [100, 200, 'hello', []]))
expectType<''>(last(''))
expectType<'o'>(last('hello'))
expectType<string>(last('hello' as string))
expectType<'o'>(last('hello' as const))
// max length: 24
expectType<'3'>(last('123333333333333333333333'))

expectType<
  TypeEqual<Last<[] | never[] | readonly [] | readonly never[]>, undefined>
>(true)
expectType<TypeEqual<Last<[''] | readonly ['']>, ''>>(true)
expectType<TypeEqual<Last<string[]>, string | undefined>>(true)
expectType<TypeEqual<Last<string | number[]>, string | number | undefined>>(
  true
)
expectType<TypeEqual<Last<[100, 200, 'hello', []]>, []>>(true)
expectType<TypeEqual<Last<string>, string>>(true)
expectType<TypeEqual<Last<''>, ''>>(true)
expectType<TypeEqual<Last<'hello'>, 'o'>>(true)
expectType<TypeEqual<Last<'abcdefghijklmnopqrstuvwx'>, 'x'>>(true)
