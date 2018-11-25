import { darken } from './utils'

const components = [
  // Buttons
  {
    name: 'Button',
    type: 'button',
    style: props => ({
      margin: '0px',
      display: 'inline-block',
      fontFamily: 'inherit',
      lineHeight: 16 / 14,
      verticalAlign: 'middle',
      textAlign: 'center',
      textDecoration: 'none',
      border: 0,
      appearance: 'none',
    }),
    extras: ['text'],
  },
  {
    name: 'ButtonOutline',
    type: 'Button',
    style: props => ({
      boxShadow: `inset 0 0 0 2px`,
      backgroundColor: 'transparent',
    }),
    extras: ['text'],
  },
  {
    name: 'ButtonCircle',
    type: 'Button',
    style: props => ({
      borderRadius: '99999px',
    }),
    extras: ['text'],
  },
  {
    name: 'ButtonTransparent',
    type: 'Button',
    style: props => ({
      color: 'inherit',
      backgroundColor: 'transparent',
    }),
    extras: ['text'],
  },
  {
    name: 'Link',
    type: 'a',
    style: {
      color: 'blue',
    },
    extras: ['text'],
  },

  // Typography
  {
    name: 'Text',
    type: 'p',
    style: {
      margin: '0px',
    },
    extras: ['text'],
  },
  {
    name: 'Truncate',
    type: 'Text',
    style: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  // Forms
  {
    name: 'Image',
    type: 'img',
    style: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
  },
  {
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
  },
  {
    name: 'Overlay',
    type: 'div',
    style: props => ({
      backgroundColor: 'white',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '100vw',
      maxHeight: '100vh',
      overflow: 'auto',
      boxShadow: `0 0 0 60vmax ${darken(1 / 2)}, 0 0 32px ${darken(1 / 4)}`,
    }),
  },
  {
    name: 'Relative',
    type: 'div',
    style: props => ({
      zIndex: 99,
      position: 'relative',
    }),
  },
  {
    name: 'Absolute',
    type: 'div',
    style: props => ({
      zIndex: 99,
      position: 'absolute',
    }),
    extras: ['position'],
  },
  {
    name: 'Fixed',
    type: 'div',
    style: props => ({
      zIndex: 99,
      position: 'fixed',
    }),
    extras: ['position'],
  },
  {
    name: 'Sticky',
    type: 'div',
    style: props => `
      position: -webkit-sticky;
      position: sticky;
      z-index: 99;
    `,
  },
  {
    name: 'Box',
    type: 'div',
    extras: ['flexContainer', 'flexBox'],
    style: { boxSizing: 'border-box' },
  },
  {
    name: 'Flex',
    type: 'div',
    extras: ['flexContainer', 'flexBox'],
    style: { display: 'flex' },
  },
  {
    name: 'Row',
    type: 'Flex',
    style: {
      flexDirection: 'row',
    },
  },
  {
    name: 'Column',
    type: 'Flex',
    style: {
      flexDirection: 'column',
    },
  },
]

export default components
