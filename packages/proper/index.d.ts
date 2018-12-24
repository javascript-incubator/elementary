export function pick(keys: Array<string>, pickee: object): object;

export function access(query: string, accessee: object): any;

export function filter(predicate: Function, host: Array<any> | Object): Array<any> | Object;

export function map(transformer: Function, host: Array<any> | Object): Array<any> | Object;

export function omit(keys: Array<string>, omitee: object): object;

export function range(start: number, end: number): Array<number>;

export function first(array: Array<T>): T;

export function last(array: Array<T>): T;

export function concat(semi: Array<any>|Object, semi: Array<any>|Object): Array<any> | Object;

export interface Maybe{
    map(transformer: Function, maybe: Maybe): Maybe
    get(): any
}

export function accessRaw(query: string, object: object): Maybe;