import React from 'react';
import { string } from 'prop-types';

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

export default createElement;
