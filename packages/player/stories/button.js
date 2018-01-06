import React from 'react'

import { storiesOf } from '@storybook/react'

import { all, Button, ButtonOutline, ButtonCircle, ButtonTransparent, BlockLink } from '@elementary/components'

const Custom = all('div')
storiesOf('ElementaryButton', module)
  .add('Just Button', () =>
    <Button>Just Button</Button>)
  .add('Outline Button', () => <ButtonOutline>Outline Button</ButtonOutline>)
  .add('Circle Button', () => <ButtonCircle>Outline Button</ButtonCircle>)
  .add('ButtonTransparent', () => <ButtonTransparent letterSpacing='2px' f='18px' tt='uppercase'>Outline Button</ButtonTransparent>)
  .add('Link', () => <BlockLink letterSpacing='2px' f='18px' tt='uppercase'>Outline Button</BlockLink>)
  .add('Custom', () => <Custom color='brown' letterSpacing='22px' hover={{ color: 'papayawhip' }}>Outline Button</Custom>)
