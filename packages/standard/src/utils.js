export const merge = (x, y) => ({ ...x, ...y });

// Functor RegistryManager => Object -> RegistryManager
export const RegistryManager = registry => {
  function map(fn = x => x) {
    return RegistryManager(
      Object.keys(registry)
        .map(x => ({ [x]: fn(registry[x]) }))
        .reduce(merge, {}),
    );
  }

  function inspect() {
    return Object.keys(registry);
  }

  function getRegistry() {
    return registry;
  }

  function toPropArray() {
    const concatenator = (acc, x) => acc.concat(x);
    return Object.values(
      RegistryManager(registry)
        .map(x => {
          return (x.styles || x.pseudoStyles).reduce(concatenator, []);
        })
        .getRegistry(),
    ).reduce(concatenator, []);
  }

  return { map, inspect, getRegistry, toPropArray };
};

// Monoid StyleGroup => Object -> StyleGroup
export const StyleGroup = (style = {}) => {
  function concat(newStyle) {
    return StyleGroup({ ...style, ...newStyle.getStyle() });
  }

  function inspect() {
    return style;
  }

  function getStyle() {
    return style;
  }

  function empty() {
    return StyleGroup();
  }

  return { concat, inspect, getStyle, empty };
};

// Foldable StyleLensManager => [styleLenses] -> StyleLensManager
export const StyleLensManager = styleLenses => {
  function map(fn = x => x) {
    return styleLenses.map(x => props => fn(x(props)));
  }

  function fold(reducer) {
    return props =>
      styleLenses
        .map(x => x(props))
        .reduce(reducer)
        .getStyle();
  }

  return { map, fold };
};
