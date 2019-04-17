import { StyleGroup } from './utils';

// Semigroup S, Props P => (String, String) -> P -> S
const styleLens = (prop, cssProperty) => props => {
  if (
    (props[prop] || props[cssProperty]) === undefined ||
    (props[prop] || props[cssProperty]) === null
  ) {
    return StyleGroup().empty();
  }

  const evaluatedValue =
    typeof (props[prop] || props[cssProperty]) === 'function'
      ? (props[prop] || props[cssProperty])(props)
      : props[prop] || props[cssProperty];

  if (evaluatedValue === undefined || evaluatedValue === null) {
    return StyleGroup.empty();
  }

  if (evaluatedValue.responsive) {
    return StyleGroup(evaluatedValue.responsive(cssProperty || prop));
  }

  return StyleGroup({
    [cssProperty || prop]: evaluatedValue,
  });
};

export default styleLens;
