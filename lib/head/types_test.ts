import { TypeEqual } from 'ts-expect'
import { expectType } from 'tsd'

import { head, Head } from '@/head'

expectType<
  TypeEqual<Head<[] | never[] | readonly [] | readonly never[]>, undefined>
>(true)
expectType<TypeEqual<Head<[''] | readonly ['']>, ''>>(true)
expectType<TypeEqual<Head<string[]>, string | undefined>>(true)
expectType<TypeEqual<Head<string | number[]>, string | number | undefined>>(
  true
)
expectType<TypeEqual<Head<[100, 200, 'hello', []]>, 100>>(true)
expectType<TypeEqual<Head<string>, string>>(true)
expectType<TypeEqual<Head<''>, ''>>(true)
expectType<TypeEqual<Head<'hello'>, 'h'>>(true)
expectType<TypeEqual<Head<[]>, undefined>>(true)

expectType<undefined>(head([]))
expectType<undefined>(head([] as const))
expectType<undefined>(head([] as []))
expectType<string | undefined>(head(['']))
expectType<''>(head([''] as const))
expectType<''>(head([''] as ['']))
expectType<string | undefined>(head([] as string[]))
expectType<string | number | undefined>(head(['1', 2]))
expectType<'1'>(head(['1', 2] as const))
expectType<100>(head([100, 200, 'hello', []] as [100, 200, 'hello', []]))
expectType<''>(head(''))
expectType<string>(head('hello' as string))
expectType<'h'>(head('hello' as const))
