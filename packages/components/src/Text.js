import hoc from './styletransformer'

export default hoc({
  name: 'Text',
  type: 'p',
  style: {
    margin: '0px',
  },
  extras: ['text'],
})('p')
