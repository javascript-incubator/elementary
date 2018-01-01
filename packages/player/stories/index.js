import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import { Button, Flex, Box } from '@elementary/components'
import { IdentityComponent } from '@elementary/higherorder-components'

storiesOf('Button', module)
  .add('with text', () => <Button f={3} is='span' color='black' hover={{color: 'white'}} borderRadius={10} onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('identity', () => <IdentityComponent F={Button} onClick={action('clicked')}>😀 😎 👍 💯</IdentityComponent>)
  .add('Flex Test', () =>
    <Flex flexDirection='column' justify='space-around' align='center' wrap>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      <Box order='2'><Button onClick={action('clicked')}>Last</Button></Box>
      <Box order='1'><Button onClick={action('clicked')}>First</Button></Box>
    </Flex>)
