export function first<T extends readonly unknown[]>(a: T): T[0] {
  return a[0];
}
