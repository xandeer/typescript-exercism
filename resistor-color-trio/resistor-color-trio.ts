const ResistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] as const

export type Color = typeof ResistorColors[number]

const Units = ['ohms', 'kiloohms', 'megaohms', 'gigaohms'] as const

export function decodedResistorValue(colors: Color[]): string {
  const [first, second, third] = colors.map(color => ResistorColors.indexOf(color))
  const value = (first * 10 + second) * Math.pow(10, third)

  const strValue = String(value)
  const unitIndex = Math.floor(strValue.split('').filter(char => char === '0').length / 3)

  const displayValue = strValue.slice(0, strValue.length - unitIndex * 3)
  const unit = Units[unitIndex]

  return `${displayValue} ${unit}`
}
