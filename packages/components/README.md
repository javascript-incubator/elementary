# Elementary Components

_Components you can use ruthlessly in your everyday React Projects._
[![install size](https://packagephobia.now.sh/badge?p=@elementary/components@0.5.4)](https://packagephobia.now.sh/result?p=@elementary/components@0.5.4)

[Read Docs](https://rajatsharma.github.io/elementary-docs/)

## Getting Started

```bash
# install components
$ yarn add @elementary/components
```

#### Use in your Projects

```js
// include in your file
import { Button, Row, Text } from '@elementary/components'

const Social = () => <Row>
  <Button color='white' bg='blue'>Facebook</Button>
  <Button color='white' bg='red'>Pinterest</Button>
  <Button color='white' bg='green'>Medium</Button>
</Row>

const AwesomeText = () => <Text letterSpacing='2px' f='18px' tt='uppercase'>Awesome</Text>

const WithHoverStyles = () => <Text color='burlywood' hover={{ color: 'cadetblue', letterSpacing: '22px' }}>Hover Me!</Text>)
```
