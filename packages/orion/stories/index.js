import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import { Button } from '@elementary/components'
import { IdentityComponent } from '@elementary/higherorder-components'

storiesOf('Button', module)
  .add('with text', () => <Button color='black' hover={{color: 'white'}} borderRadius={10} onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('identity', () => <IdentityComponent F={Button} onClick={action('clicked')}>😀 😎 👍 💯</IdentityComponent>)
