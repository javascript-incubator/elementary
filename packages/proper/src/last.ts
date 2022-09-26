type Last<T> = T extends readonly [...unknown[], infer A]
  ? A
  : T extends Array<infer U>
  ? U
  : never;

export function last<T extends readonly unknown[]>(a: T): Last<T> {
  return a.slice(-1) as Last<T>;
}
