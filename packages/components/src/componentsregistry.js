import { darken } from './utils'
import { fontSizes, space } from './constants'

const components = [
  // Buttons
  {
    name: 'Button',
    type: 'button',
    props: {
      f: fontSizes[0],
      margin: space[0],
      pl: space[3],
      pr: space[3],
      pt: space[2],
      pb: space[2],
      hover: { boxShadow: `inset 0 0 0 999px ${darken(1 / 8)}` },
      focus: { outline: 0 },
      active: { borderStyle: 'inset', backgroundColor: darken(3 / 4) },
      disabled: { opacity: 1 / 4 },
      display: 'inline-block',
    },
    style: props => ({
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
    props: {
      color: 'black',
      bg: 'transparent',
      boxShadow: `inset 0 0 0 2px`,
      hover: props => ({
        color: 'white',
        backgroundColor: props.color,
      }),
      focus: { boxShadow: `inset 0 0 0 2px, 0 0 0 2px` },
      active: props => ({
        color: 'white',
        backgroundColor: props.color,
        boxShadow: `inset 0 0 0 2px ${props.color}, inset 0 0 8px ${darken(
          1 / 4,
        )}`,
      }),
    },
    style: {},
    extras: ['text'],
  },
  {
    name: 'ButtonCircle',
    type: 'Button',
    props: {
      pl: space[3],
      pr: space[3],
    },
    style: props => ({
      borderRadius: '99999px',
    }),
    extras: ['text'],
  },
  {
    name: 'ButtonTransparent',
    type: 'Button',
    props: {
      color: 'inherit',
      bg: 'transparent',
    },
    style: props => ({
      '&:hover': {
        color: props.color,
        backgroundColor: 'transparent',
      },
      '&:focus': {
        boxShadow: `inset 0 0 0 2px, 0 0 0 2px`,
      },
      '&:active': {
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 2px, inset 0 0 8px ${darken(1 / 4)}`,
      },
    }),
    extras: ['text'],
  },
  {
    name: 'Link',
    type: 'a',
    props: {
      color: 'blue',
    },
    style: {},
    extras: ['text'],
  },
  {
    name: 'NavLink',
    type: 'a',
    props: {
      f: fontSizes[0],
      padding: space[2],
      fontWeight: props => (props.active ? 'bolder' : 'normal'),
    },
    style: props => ({
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: 'inherit',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: darken(1 / 16),
      },
      '&:disabled': {
        opacity: 1 / 4,
      },
    }),
    extras: ['text'],
  },
  {
    name: 'BlockLink',
    type: 'a',
    props: {},
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
    },
    extras: ['text'],
  },

  // Typography
  {
    name: 'Text',
    type: 'p',
    props: {
      margin: space[0],
    },
    style: {},
    extras: ['text'],
  },
  {
    name: 'Heading',
    type: 'Text',
    props: {
      is: 'h2',
      f: fontSizes[0],
      margin: space[0],
      fontWeight: '600',
    },
    style: {
      lineHeight: 1.25,
    },
  },
  {
    name: 'Subhead',
    type: 'Heading',
    props: {
      is: 'h3',
      f: fontSizes[4],
      m: space[0],
    },
    style: {},
  },
  {
    name: 'Small',
    type: 'Text',
    props: {
      is: 'small',
      f: fontSizes[4],
    },
    style: {},
  },
  {
    name: 'Lead',
    type: 'Text',
    props: {
      is: 'p',
      f: fontSizes[3],
      m: space[0],
    },
    style: {
      lineHeight: 1.25,
    },
  },
  {
    name: 'Pre',
    type: 'pre',
    props: {
      f: fontSizes[1],
      m: space[0],
    },
    style: props => ({
      fontFamily: props.theme.monospace,
      overflow: 'auto',
    }),
  },
  {
    name: 'Code',
    type: 'code',
    props: {
      f: fontSizes[1],
    },
    style: props => ({
      fontFamily: props.theme.monospace,
    }),
  },
  {
    name: 'Samp',
    type: 'Code',
    props: {
      is: 'samp',
    },
    style: {},
  },
  {
    name: 'Blockquote',
    type: 'Text',
    props: {
      is: 'blockquote',
      m: space[0],
      f: fontSizes[3],
    },
    style: {},
  },
  {
    name: 'Measure',
    type: 'div',
    props: {},
    style: {
      maxWidth: '32em',
    },
  },
  {
    name: 'Truncate',
    type: 'Text',
    props: {},
    style: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },

  // Forms
  {
    name: 'Label',
    type: 'label',
    props: {
      f: fontSizes[1],
      mb: space[1],
    },
    style: {
      display: 'flex',
      alignItems: 'center',
    },
    extras: ['text'],
  },
  {
    name: 'Input',
    type: 'input',
    props: {
      type: 'text',
      f: 'inherit',
      p: space[1],
      m: space[0],
      width: '100px',
      color: 'inherit',
      bg: 'transparent',
    },
    style: props => ({
      fontFamily: 'inherit',
      lineHeight: 'inherit',
      display: 'inline-block',
      verticalAlign: 'middle',
      border: 0,
      boxShadow: `inset 0 0 0 1px black`,
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px blue`,
      },
      '&:disabled': {
        opacity: 1 / 4,
      },
    }),
  },
  {
    name: 'Textarea',
    type: 'textarea',
    props: {
      padding: space[1],
      margin: space[0],
      width: '100px',
      color: 'inherit',
      bg: 'transparent',
    },
    style: props => ({
      fontFamily: 'inherit',
      fontSize: 'inherit',
      border: 0,
      boxShadow: `inset 0 0 0 1px black`,
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px blue`,
      },
      '&:disabled': {
        opacity: 1 / 4,
      },
    }),
  },
  {
    name: 'Checkbox',
    type: 'input',
    props: {
      type: 'checkbox',
      mr: space[1],
    },
    style: props => ({}),
  },
  {
    name: 'Radio',
    type: 'input',
    props: {
      type: 'radio',
      mr: space[1],
    },
    style: props => ({}),
  },
  {
    name: 'Slider',
    type: 'input',
    props: {
      w: '100px',
      mt: space[2],
      mb: space[2],
      ml: space[0],
      mr: space[0],
      type: 'range',
    },
    style: props => ({
      display: 'block',
      height: '50px',
      cursor: 'pointer',
      color: 'inherit',
      borderRadius: '99999px',
      backgroundColor: 'grey',
      appearance: 'none',
      '&::-webkit-slider-thumb': {
        width: '16px',
        height: '16px',
        backgroundColor: 'currentcolor',
        border: 0,
        borderRadius: '99999px',
        appearance: 'none',
      },
      '&:focus': {
        '&::-webkit-slider-thumb': {},
      },
    }),
  },
  {
    name: 'Image',
    type: 'img',
    props: {},
    style: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
  },
  {
    name: 'Avatar',
    type: 'img',
    props: {},
    style: props => ({
      display: 'inline-block',
      width: '48px',
      height: '48px',
      borderRadius: '99999px',
    }),
  },

  {
    name: 'BackgroundImage',
    type: 'div',
    props: {
      w: '100px',
      pb: props => (props.ratio || 3 / 4) * 100 + '%',
      // ratio: 3/4 // How does styled-components handle this??
      // Fix this once non-whitelisted styled-components is out
    },
    style: props => ({
      backgroundImage: props.src ? `url(${props.src})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 0,
    }),
  },

  // Layout
  {
    name: 'Container',
    type: 'div',
    props: {
      px: space[3],
      ml: 'auto',
      mr: 'auto',
      mw: 1024,
    },
  },
  {
    name: 'Divider',
    type: 'hr',
    props: {
      mt: space[2],
      mb: space[2],
    },
    style: {
      border: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
    },
  },
  {
    name: 'Media',
    type: 'div',
    props: {},
    style: props => ({
      display: 'flex',
      alignItems: 'center',
    }),
  },

  {
    name: 'Card',
    type: 'div',
    props: {
      bg: 'white',
    },
    style: props => ({
      overflow: 'hidden',
      boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
    }),
    extras: ['text'],
  },
  {
    name: 'Banner',
    type: 'div',
    props: {
      p: space[4],
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    style: props => ({
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: props.backgroundImage
        ? `url(${props.backgroundImage})`
        : 'none',
    }),
    extras: ['flexContainer', 'flexBox'],
  },
  {
    name: 'Panel',
    type: 'div',
    props: {},
    style: props => ({
      overflow: 'hidden',
      borderWidth: '1px',
      borderStyle: 'solid',
    }),
  },
  {
    name: 'PanelHeader',
    type: 'header',
    props: {
      f: fontSizes[2],
      p: space[2],
    },
    style: props => ({
      fontWeight: 'bolder',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
    }),
    extras: ['text'],
  },
  {
    name: 'PanelFooter',
    type: 'footer',
    props: {
      f: fontSizes[1],
      p: space[2],
    },
    style: props => ({
      fontWeight: 'bolder',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
    }),
    extras: ['text'],
  },
  {
    name: 'Group',
    type: 'div',
    props: {},
    style: props => {
      const R = '4px'
      return {
        '& > *': {
          borderRadius: 0,
        },
        '& > *:first-child': {
          borderRadius: `${R} 0 0 ${R}`,
        },
        '& > *:last-child': {
          borderRadius: `0 ${R} ${R} 0`,
        },
      }
    },
  },
  {
    name: 'Toolbar',
    type: 'div',
    props: {
      pl: space[2],
      pr: space[2],
      color: 'white',
      bg: 'grey',
    },
    style: {
      display: 'flex',
      minHeight: '48px',
      alignItems: 'center',
    },
  },
  {
    name: 'Badge',
    type: 'div',
    props: {
      f: fontSizes[0],
      p: space[1],
      ml: space[1],
      mr: space[1],
      color: 'white',
      bg: 'blue',
    },
    style: props => ({
      fontWeight: 'bolder',
      display: 'inline-block',
      verticalAlign: 'middle',
    }),
  },
  {
    name: 'Circle',
    type: 'Badge',
    props: {
      color: 'white',
      bg: 'blue',
    },
    style: props => ({
      textAlign: 'center',
      width: '24px',
      height: '24px',
      borderRadius: '99999px',
    }),
  },
  {
    name: 'Overlay',
    type: 'div',
    props: {
      p: space[3],
      bg: 'white',
    },
    style: props => ({
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
    name: 'Tabs',
    type: 'div',
    props: {},
    style: props => ({
      display: 'flex',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderColor: 'black',
    }),
    extras: ['flexContainer'],
  },
  {
    name: 'TabItem',
    type: 'a',
    props: {
      f: fontSizes[1],
      mr: space[3],
      pt: space[2],
      pb: space[2],
      borderBottomWidth: props => (props.active ? '2px' : '0px'),
    },
    style: props => ({
      textDecoration: 'none',
      fontWeight: 'bolder',
      color: props.active ? 'blue' : 'inherit',
      borderBottomWidth: props.active ? 2 : 0,
      borderBottomStyle: 'solid',
      '&:hover': {
        color: 'blue',
      },
    }),
  },
  {
    name: 'Relative',
    type: 'div',
    props: {
      z: 99,
    },
    style: props => ({
      position: 'relative',
    }),
  },
  {
    name: 'Absolute',
    type: 'div',
    props: {
      z: 99,
    },
    style: props => ({
      position: 'absolute',
    }),
    extras: ['position'],
  },
  {
    name: 'Fixed',
    type: 'div',
    props: {
      z: 99,
    },
    style: props => ({
      position: 'fixed',
    }),
    extras: ['position'],
  },
  {
    name: 'Sticky',
    type: 'div',
    props: {
      z: 99,
    },
    style: props => `
      position: -webkit-sticky;
      position: sticky;
    `,
  },
  {
    name: 'Close',
    type: 'ButtonTransparent',
    props: {
      p: space[0],
      f: fontSizes[3],
      children: '×',
    },
    style: props => ({
      lineHeight: space[1],
      width: '24px',
      height: '24px',
    }),
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
    extras: ['flexContainer'],
    style: { display: 'flex' },
  },
  {
    name: 'Row',
    type: 'Flex',
    props: {},
    style: {
      flexDirection: 'row',
    },
  },
  {
    name: 'Column',
    type: 'Flex',
    props: {},
    style: {
      flexDirection: 'column',
    },
  },
]

export default components
