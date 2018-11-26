import hoc from './styletransformer'

export default hoc({
  name: 'Banner',
  type: 'div',
  style: props => ({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: props.backgroundImage
      ? `url(${props.backgroundImage})`
      : 'none',
  }),
  extras: ['flexContainer', 'flexBox'],
})('div')
