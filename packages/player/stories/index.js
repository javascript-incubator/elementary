import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button, Flex, Box } from '@elementary/components'
import { IdentityComponent } from '@elementary/transformers'

storiesOf('Button', module)
  .add('with text', () => (
    <Button
      f={3}
      is="span"
      color="black"
      bg="white"
      hover={{ color: 'white' }}
      onClick={action('clicked')}
    >
      Hello Button
    </Button>
  ))
  // .add('with some emoji', () => (
  //   <Banner
  //     h="251px"
  //     minHeight="none !important"
  //     backgroundImage="https://img.game.co.uk/ml2/6/5/5/9/655908_scr5_a.png"
  //   />
  // ))
  .add('identity', () => (
    <IdentityComponent F={Button} onClick={action('clicked')}>
      😀 😎 👍 💯
    </IdentityComponent>
  ))
  .add('Flex Test', () => (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      align="center"
      borderTopStyle="solid"
      borderTopColor="green"
      borderTopWidth="2px"
    >
      <Button onClick={action('clicked')} transform="rotate(180deg)">
        😀 😎 👍 💯
      </Button>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      <Box flex={[1, 2, 4]}>
        <Button onClick={action('clicked')}>Last</Button>
      </Box>
      <Box order="1">
        <Button onClick={action('clicked')}>First</Button>
      </Box>
    </Flex>
  ))
