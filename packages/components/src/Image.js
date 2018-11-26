import hoc from './styletransformer'

export default hoc({
  name: 'Image',
  type: 'img',
  style: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
})('img')
