import { Left, Right, identity } from '@elementary/core'

const tryCatch = (f, g = identity) => {
  try {
    return Right(f())
  } catch (e) {
    return Left(g(e))
  }
}

export default tryCatch
