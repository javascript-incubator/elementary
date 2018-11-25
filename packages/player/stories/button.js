import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  Button,
  ButtonOutline,
  ButtonCircle,
  ButtonTransparent,
  BlockLink,
  Text,
  Banner,
} from '@elementary/components'

storiesOf('ElementaryButton', module)
  .add('Just Button', () => <Button>Just Button</Button>)
  .add('Banner', () => (
    <Banner
      h="251px"
      display="flex"
      backgroundImage="https://img.game.co.uk/ml2/6/5/5/9/655908_scr5_a.png"
    />
  ))
  .add('Outline Button', () => <ButtonOutline>Outline Button</ButtonOutline>)
  .add('Circle Button', () => <ButtonCircle>Outline Button</ButtonCircle>)
  .add('ButtonTransparent', () => (
    <ButtonTransparent letterSpacing="2px" f="18px" tt="uppercase">
      Outline Button
    </ButtonTransparent>
  ))
  .add('Link', () => (
    <BlockLink letterSpacing="2px" f="18px" tt="uppercase">
      Outline Button
    </BlockLink>
  ))
  .add('Custom', () => (
    <Text
      color="burlywood"
      hover={{ color: 'cadetblue', letterSpacing: '22px' }}
      transition="all 2s"
    >
      Hover Me!
    </Text>
  ))
