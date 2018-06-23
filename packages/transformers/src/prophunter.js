import React from 'react';
import { filter } from '@elementary/proper';

export const huntProps = blacklist => props => {
  const next = {};
  Object.keys(props).map(key => {
    if (blacklist.includes(key)) return null;
    next[key] = props[key];
    return null;
  });
  return next;
};

const propHunter = (blacklist = []) => Com => {
  const clean = huntProps(blacklist);
  const PropHunterElement = props => <Com {...clean(props)} />;
  PropHunterElement.displayName = 'PropHunterElement';
  return PropHunterElement;
};

export default propHunter;
