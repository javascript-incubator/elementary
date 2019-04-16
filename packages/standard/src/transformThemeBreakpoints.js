const ResponsiveDesignFactory = function(breakpoints = []) {
  const designFunction = function(style) {
    return {
      responsive: property =>
        breakpoints.reduce(
          (acc, curr, i) => ({ [curr]: { [property]: style[i + 1] }, ...acc }),
          { [property]: style[0] },
        ),
    };
  };
  return designFunction;
};

export default theme => ({
  breakpoints: ResponsiveDesignFactory(theme.breakpoints),
  ...theme,
});
