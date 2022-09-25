type Keyable = string | number | symbol;
type SemiGroup = Array<unknown> | Record<Keyable, unknown> | string;

type DerivePartial<T> = T extends Array<unknown>
  ? Array<unknown>
  : T extends Record<Keyable, unknown>
  ? Record<Keyable, unknown>
  : string;

export const concat = <T = SemiGroup>(
  obj: T,
  partial: DerivePartial<T>
): DerivePartial<T> => {
  if (Array.isArray(obj) && Array.isArray(partial)) {
    return obj.concat(partial) as DerivePartial<T>;
  }

  if (typeof obj === "string" && typeof partial === "string") {
    return obj.concat(partial) as DerivePartial<T>;
  }

  return { ...(obj as object), ...(partial as object) } as DerivePartial<T>;
};
