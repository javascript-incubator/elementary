import { StyleGroup } from './utils';

// Semigroup S, Props P => (String, String) -> P -> S
const styleLens = (prop, cssProperty) => props => {
  if (
    (props[prop] || props[cssProperty]) === undefined ||
    (props[prop] || props[cssProperty]) === null
  ) {
    return StyleGroup().empty();
  }
  if (
    (typeof (props[prop] || props[cssProperty]) === 'function'
      ? (props[prop] || props[cssProperty])(props)
      : props[prop] || props[cssProperty]
    ).responsive
  ) {
    return StyleGroup(
      (typeof (props[prop] || props[cssProperty]) === 'function'
        ? (props[prop] || props[cssProperty])(props)
        : props[prop] || props[cssProperty]
      ).responsive(cssProperty || prop),
    );
  }

  return StyleGroup({
    [cssProperty || prop]:
      typeof (props[prop] || props[cssProperty]) === 'function'
        ? (props[prop] || props[cssProperty])(props)
        : props[prop] || props[cssProperty],
  });
};

export default styleLens;
