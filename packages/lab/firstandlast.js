import test from 'ava'
const { first, last, range, flatMap, binder } = require('../proper/lib/main')

const testArray1 = [1]

test(t => t.is(first(testArray1), 1))
test(t => t.is(last(testArray1), 1))

const testArray2 = []

test(t => t.is(first(testArray2), null))
test(t => t.is(last(testArray2), null))

const testObject1 = { name: 'Nik', age: '23' }

test(t => t.deepEqual(first(testObject1), { name: 'Nik' }))
test(t => t.deepEqual(last(testObject1), { age: '23' }))

const testObject2 = {}

test(t => t.is(first(testObject2), null))
test(t => t.is(last(testObject2), null))

test(t => t.deepEqual(range(3, 8), [3, 4, 5, 6, 7]))

const testArr3 = [[1, 2], [3, 4]]

test(t => t.deepEqual(flatMap(x => x.concat(1), testArr3), [1, 2, 1, 3, 4, 1]))

test(t => t.is(binder().add(flatMap(x => x.concat(1))).add(first).invoke(testArr3), 1))
