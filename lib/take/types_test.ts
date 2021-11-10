import { expectType } from 'tsd'

import { take } from '@/take/fn'

expectType<'test'>(take(4, 'test'))
