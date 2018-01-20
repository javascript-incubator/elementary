import test from 'ava'

const { tryCatch } = require('../exceptional/lib/main')
const f = x => x

test(t => t.is(tryCatch(_ => f(1)).chain(x => tryCatch(x.left)).map(x => x).fold(_ => 'error', _ => 'noerror'), 'error'))
