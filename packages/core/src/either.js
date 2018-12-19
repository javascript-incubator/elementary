import id from './identity';

export function Right(x) {
  const map = f => Right(f(x));
  const fold = (_, g) => g(x);
  const chain = f => f(x);
  return { map, fold, chain };
}

export function Left(x) {
  const map = (_, g = id) => Left(g(x));
  const fold = (f, _) => f(x);
  const chain = (_, g = id) => g(x);
  return { map, fold, chain };
}

const Either = Right || Left;

export default Either;
