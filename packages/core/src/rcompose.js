export default (...fns) => x => fns.reduce((v, fn) => fn(v), x)
