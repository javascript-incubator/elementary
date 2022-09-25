type Last<T> = T extends [...unknown[], infer A] ? A : never;

export function last<T extends readonly unknown[]>(a: T): Last<T> {
  return a.slice(-1) as Last<T>;
}
