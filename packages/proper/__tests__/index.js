import test from 'ava';

const proper = require('../build/main');

test('array first', t => {
  t.is(proper.first([1, 2, 3]), 1);
});

test('array last', t => {
  t.is(proper.last([1, 2, 3]), 3);
});

test('object filter', t => {
  t.deepEqual(proper.filter(x => x === 1, { a: 1, b: 3 }), { a: 1 });
});

test('object map', t => {
  t.deepEqual(proper.map(x => x * 2, { a: 1, b: 3 }), { a: 2, b: 6 });
});

test('object omit', t => {
  t.deepEqual(proper.omit(['a'], { a: 1, b: 3 }), { b: 3 });
});

test('object pick', t => {
  t.deepEqual(proper.pick(['a'], { a: 1, b: 3 }), { a: 1 });
});

test('empty array first', t => {
  t.is(proper.first([]), null);
});

test('empty array last', t => {
  t.is(proper.last([]), null);
});

test('access does not exist', t => {
  t.is(proper.access('a.b.c', { a: 1 }), null);
});

test('access does exist', t => {
  t.is(proper.access('a.b.c', { a: { b: { c: 1 } } }), 1);
});
