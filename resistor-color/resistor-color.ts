export const colorCode = (color: Color) => {
  return COLORS.indexOf(color)
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const

type Color =  typeof COLORS[number]
