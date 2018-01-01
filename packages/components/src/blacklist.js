import { propTypes } from '@elementary/standard'

const blacklist = Object.keys(propTypes).map(x => Object.keys(propTypes[x])).reduce((acc, a) => [...acc, ...a], [])

export default blacklist
