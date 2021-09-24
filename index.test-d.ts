import { expectType } from 'tsd'
import uniqArrayBy from './index.js'

interface T {
  a: number
}

expectType<number[]>(uniqArrayBy([1, 2, 1, 2]))
expectType<T[]>(uniqArrayBy([{ a: 1 }, { a: 1 }], 'a'))
expectType<T[]>(uniqArrayBy([{ a: 1 }, { a: 1 }], (item: T) => item.a))
