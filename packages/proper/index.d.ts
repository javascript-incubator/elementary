declare module "@elementary/proper" {
    function map(
         transformer: Function,
         array: Array
     ): Array;
     export = map;

     function filter(
        predicate: Function,
        array: Array
    ): Array;
    export = filter;

    function pick(
        array: Array<string>,
        object: Object
    ): Object;
    export = pick;

    function omit(
        array: Array<string>,
        object: Object
    ): Object;
    export = omit;

    function first(
        array: Array<T>,
    ): T;
    export = first;

    function last(
        array: Array<T>,
    ): T;
    export = last;

    function range(
        start: number,
        end: number
    ): Array<number>;
    export = range;

    function concat(
        semi: Object,
        semi: Object
    ): Object;
    export = concat;

    function access(
        query: string,
        object: Object
    ): any;
    export = access;
 }