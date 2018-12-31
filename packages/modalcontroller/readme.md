## @elementary/modalcontroller

#### Install

```bash
# install components
$ yarn add @elementary/components
```

### Usage

- Wrap your root component with Provider

```javascript
import { withModalControllerProvider } from '@elementary/modalcontroller';

const Root = withModalControllerProvider(() => <App />);

ReactDOM.render(<Root />, document.getElementById('root'));
```

- Wrap your user component with Consumer

```javascript
import { withModalControllerConsumer } from '@elementary/modalcontroller';

const UserComponent = withModalControllerConsumer(props => <div>
  <button onClick={_ => props.addModal(_ => <div style={{ position: fixed }}>Hi this is Modal</div>)}>Open Modal</button>
<div>);
```
