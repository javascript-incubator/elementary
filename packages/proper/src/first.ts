export function first<T extends ArrayLike<unknown>>(a: T): T[0] {
  return a[0];
}
