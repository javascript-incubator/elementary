const borderStylePropFrame = dir => [`border${dir}Style`];
const borderWidthPropFrame = dir => [`border${dir}Width`];
const borderColorPropFrame = dir => [`border${dir}Color`];
const borderOnly = dir => [`border${dir}`];

const directions = ['Top', 'Bottom', 'Left', 'Right', ''];

const borderStyleGroupFrame = directions
  .map(borderStylePropFrame)
  .concat(directions.map(borderWidthPropFrame))
  .concat(directions.map(borderColorPropFrame))
  .concat(directions.map(borderOnly));

export default borderStyleGroupFrame;
