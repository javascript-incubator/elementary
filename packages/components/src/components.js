import components from './componentsregistry'
import Provider from './provider'
import createLibrary from './createlibrary'

const library = createLibrary(components)

const Components = Object.assign({}, library, { Provider })

export const {
  Button,
  ButtonOutline,
  ButtonCircle,
  ButtonTransparent,
  Link,
  NavLink,
  BlockLink,
  Heading,
  Subhead,
  Text,
  Small,
  Lead,
  Pre,
  Code,
  Samp,
  Blockquote,
  Measure,
  Truncate,
  Label,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Slider,
  Image,
  Avatar,
  BackgroundImage,
  Container,
  Divider,
  Border,
  Media,
  Card,
  Banner,
  Panel,
  PanelHeader,
  PanelFooter,
  Group,
  Toolbar,
  Badge,
  Circle,
  Tabs,
  TabItem,
  Close,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  Overlay,
  Box,
  Flex,
  Row,
  Column,
} = library

export default Components
