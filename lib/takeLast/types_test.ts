import { expectType } from 'tsd'

import { takeLast } from '@/takeLast/fn'

expectType<never[]>(takeLast(0, []))
expectType<[]>(takeLast(0, [] as []))
expectType<readonly []>(takeLast(0, [] as const))
expectType<''>(takeLast(0, ''))
expectType<''>(takeLast(0, '' as const))
