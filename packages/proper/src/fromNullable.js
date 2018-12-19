import { Right, Left } from '@elementary/core';

const fromNullable = nullable =>
  nullable === null || nullable === undefined
    ? Left(nullable)
    : Right(nullable);

export default fromNullable;
