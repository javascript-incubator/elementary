import React from 'react';
import styled from '@emotion/styled';
import styles, {
  props as blacklist,
  space,
  color,
  dimensions,
  borderRadius,
  states,
  props,
  transition,
  border,
  transform,
  boxShadow,
} from '@elementary/standard';

import { oneOfType, number, string, func, object } from 'prop-types';

const createElement = type => {
  const isEl = typeof type === 'string';

  const Base = props => {
    const Comp = isEl ? props.is || type : type;
    return <Comp {...props} />;
  };

  Base.displayName = `Created(${
    typeof type === 'string' ? type : type.displayName || 'CreatedElement'
  })`;

  Base.propTypes = {
    is: string,
  };

  return styled(Base, {
    shouldForwardProp: prop =>
      isEl ? !blacklist.concat('is').includes(prop) : true,
  })();
};

const prop = oneOfType([number, string, func, object]);

const propTypes = props.reduce((acc, x) => ({ ...acc, [x]: prop }), {});

const withStyle = (style, props, extras = []) => Component => {
  const Base = styled(Component)(
    [],
    style,
    space,
    dimensions,
    color,
    borderRadius,
    states,
    transition,
    border,
    transform,
    boxShadow,
    ...extras.map(x => styles[x]),
  );

  Base.propTypes = propTypes;

  // Clean this up after styled-components removes whitelisting
  return Base;
};

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
// taken from recompose

const hoc = ({ style, props, extras }) =>
  compose(
    withStyle(style, props, extras),
    createElement,
  );

export default hoc;
