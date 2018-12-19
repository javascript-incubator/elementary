import React from 'react';
import styled from 'styled-components';
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
} from '@elementary/standard/lib/styles';

import { oneOfType, number, string, func, object } from 'prop-types';

const createElement = type => {
  const Base = props => {
    const isEl = typeof type === 'string';
    const Comp = isEl ? props.is || type : type;
    const next = { ...props };

    if (isEl) delete next.is;

    return <Comp {...next} />;
  };

  Base.displayName =
    typeof type === 'string' ? `Created(${type})` : 'CreateElementWrapper';

  Base.propTypes = {
    is: string,
  };

  return Base;
};

const propHunter = (blacklist = []) => Com => {
  const clean = huntProps(blacklist);
  const PropHunterElement = props => <Com {...clean(props)} />;
  PropHunterElement.displayName = 'PropHunterElement';
  return PropHunterElement;
};

const huntProps = blacklist => props => {
  const next = {};
  for (let key in props) {
    if (blacklist.includes(key)) continue;
    next[key] = props[key];
  }
  return next;
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
  const Comp = styled(Base).attrs(props)([]);
  return Comp;
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
    propHunter(blacklist),
    createElement,
  );

export default hoc;
