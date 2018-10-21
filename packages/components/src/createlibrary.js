import createComponent from './createcomponents'

const createLibrary = components => {
  const library = components.filter(c => c !== null).reduce(
    (a, b) =>
      Object.assign(a, {
        [b.name]: createComponent(b, a),
      }),
    {},
  )

  return library
}

export default createLibrary
