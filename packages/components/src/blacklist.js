import { propTypes } from '@elementary/system'

const blacklist = Object.keys(propTypes).map(x => Object.keys(propTypes[x])).reduce((acc, a) => [...acc, ...a], [])

export default blacklist
