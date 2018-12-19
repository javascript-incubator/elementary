import methodRegsitry from './methodregistry';
import create from './create';

const pointfree = methodRegsitry.reduce(
  (acc, x) => ({ ...acc, [x]: create(x) }),
  {},
);

export const {
  then,
  map,
  ap,
  chain,
  join,
  concat,
  filter,
  of,
  reduce,
  traverse,
  empty,
  fold,
} = pointfree;

export { default as create } from './create';
