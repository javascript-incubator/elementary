const borderStylePropFrame = dir => `border${dir}Style`
const borderWidthPropFrame = dir => `border${dir}Width`
const borderColorPropFrame = dir => `border${dir}Color`

const directions = ['Top', 'Bottom', 'Left', 'Right', '']

const borderStyleGroupFrame = directions.map(borderStylePropFrame).concat(directions.map(borderWidthPropFrame)).concat(directions.map(borderColorPropFrame)).concat(['border'])

export default borderStyleGroupFrame
