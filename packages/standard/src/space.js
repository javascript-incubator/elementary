const props = [['m', 'margin'], ['p', 'padding']];
const direction = [
  ['t', 'Top'],
  ['b', 'Bottom'],
  ['l', 'Left'],
  ['r', 'Right'],
];
const axis = [['x', ['Left', 'Right']], ['y', ['Top', 'Bottom']]];

const concatenator = (acc, x) => acc.concat(x);
const spaceStyleGroupFrame = props
  .map(prop =>
    direction
      .map(x => [prop[0] + x[0], prop[1] + x[1]])
      .concat([[...prop]])
      .concat(
        axis
          .map(x => [prop[0] + x[0], x[1].map(y => prop[1] + y)])
          .map(x => [...x[1].map(z => [x[0], z])])
          .reduce(concatenator, []),
      ),
  )
  .reduce(concatenator, []);

export default spaceStyleGroupFrame;
